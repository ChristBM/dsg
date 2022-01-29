import { useReducer } from 'react'
import useScroolObserver from './useScroolObserver'

const initialValue = {
	language: true,
	alert: {
		show: false,
		type: ''
	},
	menuMobile: false,
}

const actionTypes = {
	toggleLang: 'ToggleLanguage',
	showAlert: 'ShowAlertMessage',
	hiddenAlert: 'HiddeAlertMessage',
	toggleMenuMobile: 'OpenCloseMenuMobile',
}

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.toggleLang:
			return {
				...state,
				language: !state.language,
			}
		case actionTypes.showAlert:
			return {
				...state,
				alert: {
					show: true,
					type: action.payload.type
				},
			}
		case actionTypes.hiddenAlert:
			return {
				...state,
				alert: {
					show: false,
					type: ''
				},
			}
		case actionTypes.toggleMenuMobile:
			return {
				...state,
				menuMobile: !state.menuMobile,
			}
		default:
			return { ...state }
	}
}

export default function useGlobalStates() {
	const [ state, dispatch ] = useReducer(reducer, initialValue)
	const { scroll } = useScroolObserver()

	const toggleLanguage = () => dispatch({ type: actionTypes.toggleLang })
	const showAlert = (type) => {
		dispatch({ type: actionTypes.showAlert, payload: { type: type } })
		setTimeout(() => {
			hiddeAlert()
		}, 1000)
	}
	const hiddeAlert = () => {
		dispatch({ type: actionTypes.hiddenAlert })
	}
	const MenuMobileSwitch = () => dispatch({ type: actionTypes.toggleMenuMobile })

	let globalStates = {
		state,
		scroll
	}

	let statesUpdaters = {
		showAlert,
		toggleLanguage,
		MenuMobileSwitch,
	}

	return { globalStates, statesUpdaters }
}
