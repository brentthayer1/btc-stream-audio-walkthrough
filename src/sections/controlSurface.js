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
	name: 'Control Surface',
	description: '',
	process: [
		{
			name: 'Global',
			description:
				"Controls over global settings. Ensure 'Cycle' button has been pressed a couple times and is lit up.",
			steps: [
				{
					name: 'TAP',
					description:
						'Tap to control tempo at which Ableton operates.  This will start “playing”.  Press spacebar to stop when needed.',
					img: TapButton,
				},
				{
					name: 'IN/OUT',
					description: 'Toggles between input channels and processing channels',
					img: InOutButton,
				},
				{
					name: 'BOOST 1',
					description: 'Toggles On / Off the Boost 1 channel',
					img: Boost1Button,
				},
				{
					name: 'BOOST 2',
					description: 'Toggles On / Off the Boost 2 channel',
					img: Boost2Button,
				},
				{
					name: 'TUNE',
					description:
						'Toggle On / Off vocal tuning for all vocals.  Ensure this is toggled off while speaking',
					img: TuneButton,
				},
				{
					name: 'KEY',
					description: 'Vocal tuning key selector',
					img: KeyKnob,
				},
				{
					name: 'ROOM',
					description: 'Level of room mics.  Keep turned up in general',
					img: RoomKnob,
				},
				{
					name: 'VERB',
					description:
						'Level of all reverb returns.  Vocal Verb 1, Vocal Verb 2, and Room Verb',
					img: VerbKnob,
				},
			],
		},
		{
			name: 'Bus',
			description: 'All instruments and vocals are controlled by two faders',
			steps: [
				{
					name: 'AUX',
					description:
						'Level of AUX input from Pro Presenter.  This also inversely controls the room mics.',
					img: AuxSlider,
				},
				{
					name: 'INST',
					description:
						'Level of all instruments.  Ensure this is generally all the way up when instruments are present in the mix.',
					img: InstSlider,
				},
				{
					name: 'VOX',
					description:
						'Level of all vocals.  Ensure this is generally all the way up when vocals are present in the mix.',
					img: VoxSlider,
				},
			],
		},

		{
			name: 'Vocals',
			description: 'Desc',
			steps: [
				{
					name: 'Slider',
					description: 'Level of vocal.  -10dB -> 10dB',
					img: VSlider,
				},
				{
					name: 'NS',
					description: 'Gate threshold',
					img: NS,
				},
				{
					name: 'S',
					description: 'Enables lead vocal distinction in mix',
					img: SButton,
				},
				{
					name: 'M',
					description: 'Enables Delay 1 send',
					img: MButton,
				},
				{
					name: 'R',
					description: 'Enables Delay 2 send',
					img: RButton,
				},
			],
		},
	],
};
