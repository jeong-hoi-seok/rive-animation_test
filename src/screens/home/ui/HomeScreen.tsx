import { StatusBar } from "expo-status-bar";
import type { JSX } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * 홈 화면.
 *
 * NativeWind(className) 동작 확인을 위해 Tailwind 유틸리티 클래스를 적용한다.
 * SafeArea 인셋을 직접 반영해 노치/상태바 영역을 침범하지 않도록 한다.
 */
export function HomeScreen(): JSX.Element {
	const insets = useSafeAreaInsets();

	return (
		<View
			className="flex-1 items-center justify-center bg-white px-6"
			style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
		>
			<StatusBar style="auto" />
			<Text className="text-2xl font-bold text-slate-900">
				rive-animation-test
			</Text>
			<Text className="mt-2 text-center text-base text-slate-500">
				Expo Router + NativeWind 준비 완료
			</Text>
		</View>
	);
}
