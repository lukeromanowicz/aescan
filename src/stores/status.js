import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from 'nuxt/app'

export const useStatus = defineStore('status', () => {
  const { MIDDLEWARE_URL } = useRuntimeConfig().public
  const middlewareVersion = ref(null)
  const nodeVersion = ref(null)

  async function fetchStatus() {
    const { data } = await axios.get(`${MIDDLEWARE_URL}/v2/status`)
    middlewareVersion.value = data.mdw_version
    nodeVersion.value = data.node_version
  }

  return {
    middlewareVersion,
    nodeVersion,
    fetchStatus,
  }
})
