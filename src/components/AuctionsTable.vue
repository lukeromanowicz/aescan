<template>
  <table>
    <thead>
      <tr>
        <th>
          Data
          <hint-tooltip>
            {{ namesHints.nameAndHighestBidder }}
          </hint-tooltip>
        </th>
        <th>
          Highest Bid
          <hint-tooltip>
            {{ namesHints.bid }}
          </hint-tooltip>
        </th>
        <th>
          Expires
          <hint-tooltip>
            {{ namesHints.ends }}
          </hint-tooltip>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="auction in auctionsEndingSoon"
        :key="auction.name">
        <td>
          <div>
            <span class="auctions-table__label">Name:</span>
            <app-link
              :to="`/names/${auction.name}`"
              class="auctions-table__chain-name u-ellipsis">
              {{ auction.name }}
            </app-link>
          </div>
          <div>
            <span class="auctions-table__label">Highest Bidder: </span>
            <value-hash-ellipsed
              :link-to="`/accounts/${auction.highestBidder}`"
              :hash="auction.highestBidder"/>
          </div>
        </td>
        <td>
          <div class="auctions-table__value">
            {{ formatAePrice(auction.bid) }}
          </div>
        </td>
        <td>
          <div class="auctions-table__blocks">
            {{ auction.expirationHeight }}
          </div>
          <div>
            <datetime-label :datetime="auction.expiration"/>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import AppLink from '@/components/AppLink'
import { namesHints } from '@/utils/hints/namesHints'
import { useNamesStore } from '@/stores/names'
import { formatAePrice } from '@/utils/format'
import ValueHashEllipsed from '@/components/ValueHashEllipsed'
import DatetimeLabel from '@/components/DatetimeLabel'

const { auctionsEndingSoon } = storeToRefs(useNamesStore())
</script>

<style scoped>
.auctions-table {
  &__chain-name {
    display: inline-block;
    width: 160px;
  }

  &__label {
    display: inline-block;
    margin: 0 var(--space-0) var(--space-0) 0;
  }

  &__value {
    font-weight: 700;
  }

  &__blocks {
    margin-bottom: var(--space-0);
  }
}
</style>
