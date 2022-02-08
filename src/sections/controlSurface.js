import TapButton from '../img/control-surface/TAP.jpg';
import Boost1Button from '../img/control-surface/BOOST1.jpg';
import Boost2Button from '../img/control-surface/BOOST2.jpg';
import InOutButton from '../img/control-surface/INOUT.jpg';
import TuneButton from '../img/control-surface/TUNE.jpg';
import KeyKnob from '../img/control-surface/KEY.jpg';
import RoomKnob from '../img/control-surface/ROOM.jpg';
import VerbKnob from '../img/control-surface/VERB.jpg';
import AuxSlider from '../img/control-surface/AUX.jpg';
import InstSlider from '../img/control-surface/INST.jpg';
import VoxSlider from '../img/control-surface/VOX.jpg';
import VSlider from '../img/control-surface/VSLIDER.jpg';
import NS from '../img/control-surface/NS.jpg';
import SButton from '../img/control-surface/S.jpg';
import MButton from '../img/control-surface/M.jpg';
import RButton from '../img/control-surface/R.jpg';

export const controlSurface = {
	id: 1,
	name: 'Control Surface',
	description: '',
	process: [
		{
			id: 1,
			name: 'Global',
			description:
				"Controls over global settings. Ensure 'Cycle' button has been pressed a couple times and is lit up.",
			steps: [
				{
					id: 'a',
					name: 'TAP',
					description:
						'Tap to control tempo at which Ableton operates.  This will start “playing”.  Press spacebar to stop when needed.',
					img: TapButton,
				},
				{
					id: 'b',
					name: 'IN/OUT',
					description: 'Toggles between input channels and processing channels',
					img: InOutButton,
				},
				{
					id: 'c',
					name: 'BOOST 1',
					description: 'Toggles On / Off the Boost 1 channel',
					img: Boost1Button,
				},
				{
					id: 'd',
					name: 'BOOST 2',
					description: 'Toggles On / Off the Boost 2 channel',
					img: Boost2Button,
				},
				{
					id: 'e',
					name: 'TUNE',
					description:
						'Toggle On / Off vocal tuning for all vocals.  Ensure this is toggled off while speaking',
					img: TuneButton,
				},
				{
					id: 'f',
					name: 'KEY',
					description: 'Vocal tuning key selector',
					img: KeyKnob,
				},
				{
					id: 'g',
					name: 'ROOM',
					description: 'Level of room mics.  Keep turned up in general',
					img: RoomKnob,
				},
				{
					id: 'h',
					name: 'VERB',
					description:
						'Level of all reverb returns.  Vocal Verb 1, Vocal Verb 2, and Room Verb',
					img: VerbKnob,
				},
			],
		},
		{
			id: 1,
			name: 'Bus',
			description: 'All instruments and vocals are controlled by two faders',
			steps: [
				{
					id: 'a',
					name: 'AUX',
					description:
						'Level of AUX input from Pro Presenter.  This also inversely controls the room mics.',
					img: AuxSlider,
				},
				{
					id: 'b',
					name: 'INST',
					description:
						'Level of all instruments.  Ensure this is generally all the way up when instruments are present in the mix.',
					img: InstSlider,
				},
				{
					id: 'c',
					name: 'VOX',
					description:
						'Level of all vocals.  Ensure this is generally all the way up when vocals are present in the mix.',
					img: VoxSlider,
				},
			],
		},

		{
			id: 1,
			name: 'Vocals',
			description: 'Desc',
			steps: [
				{
					id: 'a',
					name: 'Slider',
					description: 'Level of vocal.  -10dB -> 10dB',
					img: VSlider,
				},
				{
					id: 'b',
					name: 'NS',
					description: 'Gate threshold',
					img: NS,
				},
				{
					id: 'c',
					name: 'S',
					description: 'Enables lead vocal distinction in mix',
					img: SButton,
				},
				{
					id: 'd',
					name: 'M',
					description: 'Enables Delay 1 send',
					img: MButton,
				},
				{
					id: 'e',
					name: 'R',
					description: 'Enables Delay 2 send',
					img: RButton,
				},
			],
		},
	],
};
