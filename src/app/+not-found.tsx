import { Link, Stack } from "expo-router";
import type { JSX } from "react";
import { Text, View } from "react-native";

/**
 * 존재하지 않는 경로 진입 시 표시되는 화면 (Expo Router 표준 +not-found).
 */
export default function NotFoundScreen(): JSX.Element {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View className="flex-1 items-center justify-center bg-white px-6">
				<Text className="text-lg font-semibold text-slate-900">
					화면을 찾을 수 없습니다.
				</Text>
				<Link href="/" className="mt-4 text-base text-blue-600">
					홈으로 돌아가기
				</Link>
			</View>
		</>
	);
}
