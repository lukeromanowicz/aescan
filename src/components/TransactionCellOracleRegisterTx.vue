<template>
  <value-hash-ellipsed
    :hash="transactionData.oracle_id"
    :link-to="`/oracles/${transactionData.oracle_id}`"/>

  <app-tooltip>
    <app-chip size="sm">
      {{ formatAePrice(formatAettosToAe(transactionData.fee)) }}
    </app-chip>
    <template #tooltip>
      FEE
    </template>
  </app-tooltip>
</template>

<script setup>
import { formatAePrice, formatAettosToAe } from '@/utils/format'
import AppChip from '@/components/AppChip'
import ValueHashEllipsed from '@/components/ValueHashEllipsed'

defineProps({
  transactionData: {
    required: true,
    type: Object,
  },
})
</script>
