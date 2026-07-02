import { Stack } from "expo-router";
import type { JSX } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "@/shared/styles/global.css";

/**
 * 루트 레이아웃.
 *
 * - global.css를 import해 NativeWind 스타일을 앱 전역에 주입한다.
 * - SafeAreaProvider로 노치/상태바 인셋 컨텍스트를 제공한다.
 * - Stack 네비게이터를 루트 네비게이터로 사용한다.
 */
export default function RootLayout(): JSX.Element {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	);
}
