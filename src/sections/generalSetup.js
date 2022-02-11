import audioInput from '../img/setup/disconnect.png';

export const generalSetup = {
	name: 'General Setup',
	description: 'These steps will get everything set up initially',
	img: false,
	process: [
		{
			name: 'Connections',
			description:
				'Please ensure the following connections are correct and working',
			img: false,
			steps: [
				{
					name: 'Keyboard Maestro',
					description: 'Open keyboard maestro and minimize the window.',
					img: false,
				},
				{
					name: 'X32',
					description: 'The X32 can be turned on here',
					img: false,
				},
				{
					name: 'Ableton Audio Input',
					description: 'Select X32 as input source',
					img: audioInput,
				},
				{
					name: 'Ableton Audio Output',
					description:
						'Select Scarlet as output source.  Ensure channels 1-4 are enabled',
					img: false,
				},
				{
					name: 'Cue out',
					description: 'Ensure cue out is set to channels 3 & 4',
					img: false,
				},
				{
					name: 'Audio Out',
					description: 'Turn Scarlet output level to max',
					img: false,
				},
				{
					name: 'Castr',
					description: 'Ensure Castr is receiving audio from the encoder',
					img: false,
				},
			],
		},
	],
};
