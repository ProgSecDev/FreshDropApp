import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from "react-native-toast-message";
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
    <CartProvider>
      <WishlistProvider>
        <Stack screenOptions={{
          headerShown: false
        }} />
        <Toast />
      </WishlistProvider>
    </CartProvider>
    </GestureHandlerRootView>
  )
}