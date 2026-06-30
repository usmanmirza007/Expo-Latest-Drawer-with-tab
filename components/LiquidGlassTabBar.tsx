import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
export default function LiquidGlassTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [containerWidth, setContainerWidth] = useState(0);

  // Set colors based on active system theme
  const isDark = colorScheme === "dark";
  const activeColor = isDark ? "#A78BFA" : "#4F46E5"; // violet-400 or indigo-600
  const inactiveColor = isDark ? "#64748B" : "#94A3B8"; // slate-500 or slate-400
  const indicatorBg = isDark
    ? "rgba(167, 139, 250, 0.16)"
    : "rgba(79, 70, 229, 0.08)";
  const indicatorBorder = isDark
    ? "rgba(167, 139, 250, 0.4)"
    : "rgba(79, 70, 229, 0.3)";

  const tabCount = state.routes.length;
  const tabWidth = containerWidth ? containerWidth / tabCount : 0;

  // Animation values for liquid transition
  const translateX = useSharedValue(0);
  const scaleX = useSharedValue(1);
  const scaleY = useSharedValue(1);

  // Sync animation values with active index changes
  useEffect(() => {
    if (tabWidth > 0) {
      const targetX = state.index * tabWidth;
      
      // Animate sliding position with a spring
      translateX.value = withSpring(targetX, {
        damping: 14,
        stiffness: 110,
        mass: 0.8,
      });

      // Liquid stretching effect
      scaleX.value = withSequence(
        withTiming(1.3, { duration: 110 }),
        withSpring(1, { damping: 10, stiffness: 120 })
      );
      scaleY.value = withSequence(
        withTiming(0.85, { duration: 110 }),
        withSpring(1, { damping: 10, stiffness: 120 })
      );
    }
  }, [state.index, tabWidth]);

  // Handler for layout events to measure container width dynamically
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  // Reanimated style for the liquid bubble background
  const animatedBubbleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scaleX: scaleX.value },
        { scaleY: scaleY.value },
      ],
    };
  });

  return (
    <View
      style={[
        styles.outerContainer,
        {
          bottom: Math.max(insets.bottom, 16),
          backgroundColor: isDark ? "rgba(15, 23, 42, 0.2)" : "rgba(255, 255, 255, 0.2)",
          borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
        },
      ]}
    >
      <BlurView
        intensity={70}
        tint={isDark ? "dark" : "light"}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.innerContainer} onLayout={onLayout}>
        {/* Sliding Liquid Background Bubble */}
        {tabWidth > 0 && (
          <Animated.View
            style={[
              styles.liquidBubble,
              animatedBubbleStyle,
              {
                width: tabWidth - 16, // leave some horizontal margin per tab
                backgroundColor: indicatorBg,
                borderColor: indicatorBorder,
              },
            ]}
          />
        )}

        {/* Tab Buttons */}
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          // Render configured tab icon, providing dynamic color and focus state
          const icon = options.tabBarIcon
            ? options.tabBarIcon({
                color: isFocused ? activeColor : inactiveColor,
                focused: isFocused,
                size: 24,
              })
            : null;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarButton
              key={route.key}
              isFocused={isFocused}
              label={label}
              icon={icon}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
}

// Inner component for each individual tab button with local scale springs
interface TabBarButtonProps {
  isFocused: boolean;
  label: any;
  icon: React.ReactNode;
  activeColor: string;
  inactiveColor: string;
  onPress: () => void;
  onLongPress: () => void;
}

function TabBarButton({
  isFocused,
  label,
  icon,
  activeColor,
  inactiveColor,
  onPress,
  onLongPress,
}: TabBarButtonProps) {
  const iconScale = useSharedValue(1);
  const textScale = useSharedValue(0.9);
  const dotScale = useSharedValue(0);

  useEffect(() => {
    iconScale.value = withSpring(isFocused ? 1.2 : 1, {
      damping: 12,
      stiffness: 150,
    });
    textScale.value = withSpring(isFocused ? 1 : 0.95, {
      damping: 12,
      stiffness: 150,
    });
    dotScale.value = withSpring(isFocused ? 1 : 0, {
      damping: 10,
      stiffness: 150,
    });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: textScale.value }],
      opacity: isFocused ? 1 : 0.8,
    };
  });

  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: dotScale.value }],
      opacity: dotScale.value,
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabButton}
    >
      <Animated.View style={[styles.iconWrapper, animatedIconStyle]}>
        {icon}
      </Animated.View>
      <Animated.Text
        style={[
          styles.tabLabel,
          animatedTextStyle,
          {
            color: isFocused ? activeColor : inactiveColor,
            fontWeight: isFocused ? "700" : "500",
          },
        ]}
        numberOfLines={1}
      >
        {label}
      </Animated.Text>
      {/* Active dot underneath the label */}
      <Animated.View
        style={[
          styles.activeDot,
          animatedDotStyle,
          { backgroundColor: activeColor },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  liquidBubble: {
    position: "absolute",
    left: 8, // aligns with paddingHorizontal
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
  },
  tabButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconWrapper: {
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 10,
  },
  activeDot: {
    position: "absolute",
    bottom: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});
