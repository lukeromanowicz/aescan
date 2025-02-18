import { defineStore, storeToRefs } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from 'nuxt/app'
import { adaptOracleDetails, adaptOracleEvents } from '@/utils/adapters'
import { useRecentBlocksStore } from '@/stores/recentBlocks'

export const useOracleDetailsStore = defineStore('oracleDetails', () => {
  const { MIDDLEWARE_URL } = useRuntimeConfig().public
  const { blockHeight } = storeToRefs(useRecentBlocksStore())

  const oracleId = ref(null)
  const rawOracle = ref(null)
  const lastExtendedTx = ref(null)
  const lastQueryTx = ref(null)
  const rawEvents = ref(null)

  const oracleDetails = computed(() => rawOracle.value
    ? adaptOracleDetails(
      rawOracle.value,
      lastExtendedTx.value,
      lastQueryTx.value,
      blockHeight.value,
    )
    : null,
  )

  const oracleEvents = computed(() => rawEvents.value ? adaptOracleEvents(rawEvents.value) : null)

  async function fetchOracleDetails(id) {
    oracleId.value = id

    await Promise.allSettled([
      fetchOracle(),
      fetchLastQueryTx(),
      fetchLastExtendedTx(),
    ])

    return true
  }

  async function fetchOracle() {
    const { data } = await axios.get(`${MIDDLEWARE_URL}/v2/oracles/${oracleId.value}`)
    rawOracle.value = data
  }

  async function fetchLastQueryTx() {
    const { data } = await axios.get(`${MIDDLEWARE_URL}/v2/txs?direction=backward&limit=1&type=oracle_query&oracle=${oracleId.value}`)
    lastQueryTx.value = data.data?.[0]
  }

  async function fetchLastExtendedTx() {
    const { data } = await axios.get(`${MIDDLEWARE_URL}/v2/txs?direction=backward&limit=1&type=oracle_extend&oracle=${oracleId.value}`)
    lastExtendedTx.value = data.data?.[0]
  }

  async function fetchOracleEvents(queryParameters = null) {
    rawEvents.value = null
    const defaultParameters = `/v2/oracles/${oracleId.value}/responses`

    try {
      const { data } = await axios.get(`${MIDDLEWARE_URL}${queryParameters || defaultParameters}`)
      rawEvents.value = data
    } catch (e) {
      rawEvents.value = null
    }
  }

  return {
    fetchOracleDetails,
    fetchOracleEvents,
    oracleDetails,
    oracleId,
    rawOracle,
    lastExtendedTx,
    lastQueryTx,
    oracleEvents,
  }
})
