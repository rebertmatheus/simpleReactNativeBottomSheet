import React, { useState } from "react";
import { Button, View, Text, TouchableHighlight } from "react-native";
import BottomSheetStyles from "./style";

interface BottomSheetProps {
	isVisible: boolean,
	onDismiss: any,
	items: any,
	userName: string,
	message: string,
	showHeader: boolean,
	onButtonPressed: any,
}

const BottomSheet = (props: BottomSheetProps) => {

	const renderItem = (item: any) => {
		return (
			<TouchableHighlight style={BottomSheetStyles.bottomButton} onPress={() => props.onButtonPressed(item.name)} >
				<Text>{item.displayName}</Text>
			</TouchableHighlight>
		);
	}

	const bottomSheetEnabled = () => {
		return (
			<TouchableHighlight onPress={props.onDismiss} style={BottomSheetStyles.container}>
				<View style={BottomSheetStyles.bottomView}>
					{props.showHeader &&
						<>
							<Text style={[BottomSheetStyles.bottomText, BottomSheetStyles.bottomTextName]} >
								{props.userName},
							</Text>
							<Text style={BottomSheetStyles.bottomText}>
								{props.message}
							</Text>
						</>
					}
					{props.items.length > 0 && props.items.map((item: any) => renderItem(item))
					}
				</View>
			</TouchableHighlight>
		);
	}

	return (
		<>
			{props.isVisible ? bottomSheetEnabled() : <View></View>}
		</>
	);
}

export default BottomSheet;