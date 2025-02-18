<template>
  <div class="tabs">
    <ul class="tabs__navigation">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'tabs__item',
          { 'tabs__item--active': activeTabIndex === index },
        ]"
        @click="selectTab(index)">
        {{ tab.title }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
})

provide('registerTab', tab => tabs.value.push(tab))

const emit = defineEmits(['update:modelValue'])
const tabs = ref([])

const activeTabIndex = props.modelValue === null ? ref(0) : useVModel(props, 'modelValue', emit)

watch(
  () => props.modelValue,
  () => selectTab(activeTabIndex.value),
  { immediate: true },
)

onMounted(() => {
  selectTab(activeTabIndex.value)
})

function selectTab(tabIndex) {
  activeTabIndex.value = tabIndex
  tabs.value.forEach((tab, index) => {
    tab.isActive = index === tabIndex
  })
}
</script>

<style scoped>
.tabs {
  @media (--desktop) {
    padding-top: 0;
  }

  &__navigation {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: var(--space-0);
    list-style: none;
    margin-bottom: var(--space-2);
  }

  &__item {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    padding: var(--space-1);
    background: var(--color-midnight-15);
    color: var(--color-gray);
    border-radius: 4px;
    margin-bottom: 3px;

    @media (--desktop) {
      font-size: 16px;
      line-height: 24px;
    }

    &--active {
      margin-bottom: 0;
      color: var(--color-midnight);
      border-radius: 4px 4px 0 0;
      border-bottom: 3px solid var(--color-fire);
      background: var(--color-white);
    }
  }
}
</style>
