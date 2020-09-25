import React, { useState } from "react"
import { Button, View } from "react-native"
import BottomSheet from "./bottomSheet"
import HomeStyles from "./style"

const Home = () => {

	const [isVisible, setVisible] = useState(false)

	const onButtonPressed = (id: string) => {
		console.log(id);
		setVisible(false);
	}

	return (
		<View style={HomeStyles.container} >
			<Button title='BottomSheet' onPress={() => setVisible(true)} />
			<BottomSheet isVisible={isVisible}
				onDismiss={() => setVisible(false)}
				onButtonPressed={onButtonPressed}
				userName='Julio'
				message='Selecione uma opção'
				showHeader={true}
				items={
					[
						{ name: 'PRIMARIA', displayName: 'Primária' },
						{ name: 'SECUNDARIA', displayName: 'Secundaria' },
						{ name: 'TROCA', displayName: 'Troca de Porta' }
					]
				} />
		</View>
	)
}

export default Home;