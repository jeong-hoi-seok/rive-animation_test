import type { JSX } from "react";
import Rive, { Alignment, AutoBind, Fit } from "rive-react-native";

/**
 * 떠 있는 섬 씬 위젯.
 *
 * Rive 에디터에서 제작한 섬/집/나무/캐릭터 씬을 렌더링한다.
 * "State Machine 1"이 캐릭터의 주 동작 루프(통통 → 휴식 → 산책 → 휴식)를 재생한다.
 */
export function IslandScene(): JSX.Element {
	return (
		<Rive
			// TODO: 섬 씬 완성본(island.riv) 도착 시 교체
			source={require("../../../../assets/data-binding-demo.riv")}
			stateMachineName="State Machine 1"
			dataBinding={AutoBind(true)}
			autoplay
			fit={Fit.Contain}
			alignment={Alignment.Center}
			style={{ flex: 1, width: "100%" }}
		/>
	);
}
