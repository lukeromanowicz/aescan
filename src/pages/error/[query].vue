<template>
  <Head>
    <Title>{{ APP_TITLE_SHORT }} | Search not found</Title>
  </Head>

  <page-header>
    Search not found
  </page-header>

  <app-panel class="search-error__panel">
    <p class="search-error__paragraph">
      Oops! We are sorry. The search string
      <span class="search-error__query">
        {{ route.params.query }}</span>
      was not found.
    </p>

    <p class="search-error__paragraph">
      Ask for help in the
      <app-link to="https://forum.aeternity.com/">
        Forum
      </app-link>
      if the error persists.
    </p>

    <div class="search-error__container">
      <app-button
        to="/"
        class="search-error__button">
        Back to Dashboard
      </app-button>
    </div>
  </app-panel>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import AppLink from '@/components/AppLink'
import PageHeader from '@/components/PageHeader'
import AppButton from '@/components/AppButton'
import AppPanel from '@/components/AppPanel'

useHead({
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})

const route = useRoute()
</script>

<style scoped>
.search-error {
  &__panel {
    margin-top: var(--space-4);
    padding: var(--space-4) var(--space-1);

    @media (--desktop) {
      padding: var(--space-4);
    }
  }

  &__paragraph {
    margin-bottom: var(--space-3);
    @media (--desktop) {
      &:last-of-type {
        margin-bottom: var(--space-6);
      }
    }
  }

  &__button {
    width: 215px;
    padding: var(--space-3) var(--space-5);
  }

  &__query {
    font-weight: 700;
    word-wrap: break-word;
  }

  &__container {
    display: flex;
    justify-content: center;

    @media (--desktop) {
      justify-content: flex-start;
    }
  }
}
</style>
