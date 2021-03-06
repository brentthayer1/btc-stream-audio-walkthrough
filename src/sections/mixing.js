import disconnect from '../img/mixing/disconnect.png';
import del from '../img/mixing/delete.png';
import recordDisable from '../img/mixing/record-disable.png';
import inputChannels from '../img/mixing/input-channels.png';
import channelInput from '../img/mixing/channel-input.png';
import channelGain from '../img/mixing/channel-gain.png';
import channelOut from '../img/mixing/channel-out.png';
import openPlugin from '../img/mixing/open-plugin.png';

export const mixing = {
	name: 'Mixing',
	description: 'These steps will guide through mixing',
	img: false,
	process: [
		{
			name: 'Mixing Setup',
			description: 'Steps for completing a mix',
			img: false,
			steps: [
				{
					name: 'Audio Input',
					description: 'Disconnect Ableton from X32',
					img: disconnect,
				},
				{
					name: 'Mix',
					description: 'Perform mix processing',
					img: false,
				},
				{
					name: 'Delete',
					description:
						'When mix is complete, delete all previously recorded tracks',
					img: del,
				},
				{
					name: 'Audio Input',
					description: 'Reconnect Ableton to X32',
					img: disconnect,
				},
				{
					name: 'Record Disable',
					description: 'Disable record enable on all INPUT tracks',
					img: recordDisable,
				},
			],
		},
		{
			name: 'Input',
			description: 'Appropriate input will allow for a smoother flow',
			img: false,
			steps: [
				{
					name: 'Channel Input',
					description: 'Each channel input will be controlled individually',
					img: channelInput,
				},
				{
					name: 'Channel Gain',
					description:
						'Each channel should be gained to right around -12 dB at peaks.  This process needs to be continually monitored through the mix as well as stream.',
					img: channelGain,
				},
			],
		},
		{
			name: 'Out',
			description: '',
			img: false,
			steps: [
				{
					name: 'Channels Output',
					description:
						'The channel outputs are where the majority of the mix takes place, aside from input level monitoring.',
					img: channelOut,
				},
				{
					name: 'Channel Levels',
					description:
						'The channel faders are mapped to the control surface, so adjusting levels should NOT take place on the faders.  Instead, utilize the LAST dynamic plugin within the plugin chain, and adjust the output from there.  Additionally, a utility plugin can be utilized to raise or lower the level.',
					img: channelOut,
				},
				{
					name: 'Open Plugin',
					description:
						'3rd party plugins can be opened by clicking the wrench icon.',
					img: openPlugin,
				},
			],
		},
	],
};
