import recordEnable from '../img/record-enable.png';
import TapButton from '../img/control-surface/TAP.jpg';
import Boost1Button from '../img/control-surface/BOOST1.jpg';
import Boost2Button from '../img/control-surface/BOOST2.jpg';
import InOutButton from '../img/control-surface/INOUT.jpg';
import TuneButton from '../img/control-surface/TUNE.jpg';
import KeyKnob from '../img/control-surface/KEY.jpg';
import RoomKnob from '../img/control-surface/ROOM.jpg';
import VerbKnob from '../img/control-surface/VERB.jpg';

export const intro = {
	id: 1,
	name: 'Introduction',
	description:
		'This site will help guide through the necesarry steps to set up and maintain proper audio for streaming',
	process: [],
};

export const generalSetup = {
	id: 1,
	name: 'General Setup',
	description: 'These steps will get everything set up initially',
	process: [
		{
			id: 1,
			name: 'Connections',
			description:
				'Please ensure the following connections are correct and working',
			steps: [
				{
					id: 'a',
					name: 'X32',
					description: 'The X32 can be turned on here',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Ableton Audio Input',
					description: 'Select X32 as input source',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Ableton Audio Output',
					description: 'Select Scarlet as output source',
					img: 'img',
				},
				{
					id: 'd',
					name: 'Audio Out',
					description: 'Turn Scarlet output level to max',
					img: 'img',
				},
				{
					id: 'e',
					name: 'Castr',
					description: 'Ensure Castr is receiving audio from the encoder',
					img: 'img',
				},
			],
		},
		{
			id: 2,
			name: 'Screen',
			description: 'test desc',
			steps: [
				{
					id: 'a',
					name: 'NS',
					description: 'Open the instance of NS for each vocal channel',
					img: 'img',
				},
				{
					id: 'b',
					name: 'SSL',
					description: 'Open the SSL Compressor on the master channel',
					img: 'img',
				},
				{
					id: 'c',
					name: 'L2',
					description: 'Open the L2 limiter on the master channel',
					img: 'img',
				},
			],
		},
	],
};

export const recording = {
	id: 1,
	name: 'Recording',
	description: 'These steps will guide through recording',
	process: [
		{
			id: 1,
			name: 'Recording Service',
			description: 'Steps to record service',
			steps: [
				{
					id: 'a',
					name: 'Record Enable',
					description: 'Record enable all INPUT tracks.  Circle should be red',
					img: recordEnable,
				},
				{
					id: 'b',
					name: 'Stop',
					description:
						'Ensure timeline is at 0 seconds by pressing the stop button',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Record',
					description: 'Press record button.  Circle will be red.',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Stop',
					description:
						'Press space bar or the stop button to finish recording.',
					img: 'img',
				},
			],
		},
	],
};

export const mixing = {
	id: 1,
	name: 'Mixing',
	description: 'These steps will guide through mixing',
	process: [
		{
			id: 1,
			name: 'Preliminary Mixdown',
			description: 'Steps for completing a mix',
			steps: [
				{
					id: 'a',
					name: 'Audio Input',
					description: 'Disconnect Ableton from X32',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Mix',
					description: 'Perform mix processing',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Delete',
					description:
						'When mix is complete, delete all previously recorded tracks',
					img: 'img',
				},
				{
					id: 'd',
					name: 'Audio Input',
					description: 'Reconnect Ableton to X32',
					img: 'img',
				},
				{
					id: 'e',
					name: 'Record Enable',
					description: 'Disable record enable on all INPUT tracks',
					img: 'img',
				},
			],
		},
		{
			id: 2,
			name: 'Monitor Input Gain ',
			description: 'Appropriate input will allow for a smoother flow',
			steps: [
				{
					id: 'a',
					name: 'Channel Input',
					description: 'Each channel input will be controlled individually',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Channel Gain',
					description:
						'Each channel should be gained to right around -12 dB at peaks',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Continuous',
					description:
						'This is something that be dialed in once something has been recorded',
					img: 'img',
				},
			],
		},
	],
};

export const controlSurface = {
	id: 1,
	name: 'Control Surface',
	description:
		"Ensure 'Cycle' button has been pressed a couple times and is lit up",
	process: [
		{
			id: 1,
			name: 'Global',
			description: 'Desc',
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
	],
};

export const template = {
	id: 1,
	name: 'Name',
	description: 'Desc',
	process: [
		{
			id: 1,
			name: 'Name',
			description: 'Desc',
			steps: [
				{
					id: 'a',
					name: '',
					description: 'Desc',
					img: 'img',
				},
				{
					id: 'b',
					name: '',
					description: 'Desc',
					img: 'img',
				},
			],
		},
	],
};
