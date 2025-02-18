<template>
  <div class="market-stats">
    <h2 class="market-stats__heading">
      Current {{ selectedNetwork }} Stats
    </h2>
    <ul class="market-stats__list">
      <li class="market-stats__item">
        <div class="market-stats__label">
          Price:
        </div>
        <div class="market-stats__value">
          $ {{ formatNullable(price) }}
          <app-chip
            class="market-stats__chip"
            :variant="priceChipVariant">
            {{ priceChangeSign }}{{ formatNullable(priceChange) }} %
          </app-chip>
        </div>
      </li>
      <li class="market-stats__item">
        <div class="market-stats__label">
          Marketcap:
        </div>
        <div class="market-stats__value">
          $ {{ formatNullable(formatNumber(marketCap)) }}
        </div>
      </li>
      <li class="market-stats__item">
        <div class="market-stats__label">
          Distribution:
        </div>
        <div class="market-stats__value">
          {{ formatNullable(formatAePrice(distribution, 0)) }} /
          {{ formatAePrice(MAX_AE_DISTRIBUTION, 0) }} ({{
            formatNullable(distributionPercentage)
          }}%)
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRuntimeConfig } from 'nuxt/app'
import { MAX_AE_DISTRIBUTION } from '@/utils/constants'
import { formatAePrice, formatNullable, formatNumber } from '@/utils/format'
import { useMarketStatsStore } from '@/stores/marketStats'
import AppChip from '@/components/AppChip'

const { NETWORK_NAME } = useRuntimeConfig().public
const selectedNetwork = `${NETWORK_NAME
  .charAt(0)
  .toUpperCase()}${NETWORK_NAME.slice(1).toLowerCase()}`

const {
  price,
  priceChange,
  marketCap,
  distribution,
  distributionPercentage,
} = storeToRefs(useMarketStatsStore())

const priceChangeSign = computed(() => priceChange.value > 0 ? '+' : '')
const priceChipVariant = computed(() => priceChange.value > 0 ? 'success' : 'error')
</script>

<style scoped>
.market-stats {
  &__heading {
    color: var(--color-white);
    margin-bottom: var(--space-3);
    display: none;
    @media (--desktop) {
      display: block;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    color: var(--color-white);
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;

    @media (--desktop) {
      gap: var(--space-3);
      flex-direction: row;
      justify-content: space-between;
      font-size: 20px;
      line-height: 25px;
      margin: 0;
    }
  }

  &__item {
    @media (--desktop) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &__value {
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  &__label {
    margin-right: var(--space-0);
  }

  &__chip {
    margin-left: var(--space-1);
  }
}
</style>
