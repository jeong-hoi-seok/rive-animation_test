const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Rive 애니메이션 파일(.riv)을 번들 에셋으로 포함한다.
config.resolver.assetExts.push("riv");

module.exports = withNativeWind(config, {
	input: "./src/shared/styles/global.css",
});
