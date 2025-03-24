import { getCachedGlobal } from '@/utilities/getGlobals'
import { NavigationClient } from './Component.client'
import { Header } from '@/payload-types'

export async function Navigation() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  return <NavigationClient data={headerData} />
}
