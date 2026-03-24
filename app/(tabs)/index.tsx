import Header from '@/components/Header'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className='flex-1' edges={['top']}>
      <Header title = 'Forever' showMenu showCart showLogo/>

      <ScrollView className='flex-1 px-4' showsVerticalScrollIndicator = {false}>
        {/* Banner Slider */}
      </ScrollView>
    </SafeAreaView>
  )
}