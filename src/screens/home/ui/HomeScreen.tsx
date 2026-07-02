import { StatusBar } from "expo-status-bar";
import type { JSX } from "react";
import { View } from "react-native";

import { IslandScene } from "@/widgets/island-scene";

/**
 * 홈 화면.
 *
 * Rive로 제작한 떠 있는 섬 씬(IslandScene)을 전체 화면으로 표시한다.
 */
export function HomeScreen(): JSX.Element {
	return (
		<View className="flex-1 bg-white">
			<StatusBar style="auto" />
			<IslandScene />
		</View>
	);
}
