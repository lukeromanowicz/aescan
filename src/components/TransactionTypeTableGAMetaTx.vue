<template>
  <table class="transaction-type-panel-ga-meta-tx__table">
    <tbody>
      <tr class="transaction-type-panel-ga-meta-tx__row">
        <th class="transaction-type-panel-ga-meta-tx__table-header">
          Sender
        </th>
        <td class="transaction-type-panel-ga-meta-tx__data">
          <app-link :to="`/accounts/${innerTransactionDetails.sender_id}`">
            {{ innerTransactionDetails.sender_id }}
          </app-link>
        </td>
      </tr>
      <tr class="transaction-type-panel-ga-meta-tx__row">
        <th class="transaction-type-panel-ga-meta-tx__table-header">
          Recipient
        </th>
        <td class="transaction-type-panel-ga-meta-tx__data">
          <app-link :to="`/accounts/${innerTransactionDetails.recipient_id}`">
            {{ innerTransactionDetails.recipient_id }}
          </app-link>
        </td>
      </tr>
      <tr class="transaction-type-panel-ga-meta-tx__row">
        <th class="transaction-type-panel-ga-meta-tx__table-header">
          Amount
        </th>
        <td class="transaction-type-panel-ga-meta-tx__data">
          {{
            formatAePrice(
              formatAettosToAe(innerTransactionDetails.amount, null),
              null,
            )
          }}
        </td>
      </tr>
      <tr class="transaction-type-panel-ga-meta-tx__row">
        <th class="transaction-type-panel-ga-meta-tx__table-header">
          Payload
        </th>
        <td class="transaction-type-panel-ga-meta-tx__data">
          {{ payload }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { decode } from '@aeternity/aepp-sdk'
import { formatAePrice, formatAettosToAe, formatNullable } from '@/utils/format'
import AppLink from '@/components/AppLink'

const props = defineProps({
  transactionData: {
    required: true,
    type: Object,
  },
})

const innerTransactionDetails = computed(() =>
  props.transactionData.tx.tx,
)

const payload = computed(() =>
  formatNullable(decode(innerTransactionDetails.value.payload).toString()),
)
</script>

<style scoped>
.transaction-type-panel-ga-meta-tx {
  &__table {
    table-layout: fixed;
  }

  &__table-header {
    border-bottom: 1px solid var(--color-midnight-15);
  }

  &__data {
    word-wrap: break-word;
    text-align: right;
  }

  &__row:last-of-type &__table-header {
    border-bottom: 0;
  }
}
</style>
