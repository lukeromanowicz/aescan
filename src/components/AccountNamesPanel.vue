<template>
  <app-panel class="account-names-panel">
    <paginated-content
      :entities="accountNames"
      @prev-clicked="loadPrevAccountNames"
      @next-clicked="loadNextAccountNames">
      <account-names-table
        class="account-names-panel__account-names-table"
        :account-names="accountNames"/>

      <account-names-table-condensed
        class="account-names-panel__account-names-table-condensed"
        :account-names="accountNames"/>
    </paginated-content>
  </app-panel>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import AppPanel from '@/components/AppPanel'
import PaginatedContent from '@/components/PaginatedContent'
import AccountNamesTable from '@/components/AccountNamesTable'
import AccountNamesTableCondensed from '@/components/AccountNamesTableCondensed'
import { useAccountStore } from '@/stores/accountDetails'

const accountStore = useAccountStore()
const { fetchAccountNames } = accountStore
const { accountNames } = storeToRefs(accountStore)

function loadPrevAccountNames() {
  fetchAccountNames({ queryParameters: accountNames.value.prev })
}
function loadNextAccountNames() {
  fetchAccountNames({ queryParameters: accountNames.value.next })
}
</script>

<style scoped>
.account-names-panel {
  background: var(--color-white);
  padding: var(--space-4) var(--space-1) var(--space-3);

  @media (--desktop) {
    padding: var(--space-4);
  }

  &__account-names-table {
    display: none;

    @media (--desktop) {
      display: revert;
      margin-bottom: var(--space-3);
    }
  }

  &__account-names-table-condensed {
    @media (--desktop) {
      display: none;
    }
  }
}
</style>
