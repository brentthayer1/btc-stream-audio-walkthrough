import disconnect from '../img/mixing/disconnect.png';
import del from '../img/mixing/delete.png';
import recordDisable from '../img/mixing/record-disable.png';
import inputChannels from '../img/mixing/input-channels.png';
import channelInput from '../img/mixing/channel-input.png';
import channelGain from '../img/mixing/channel-gain.png';
import channelOut from '../img/mixing/channel-out.png';

export const mixing = {
	name: 'Mixing',
	description: 'These steps will guide through mixing',
	process: [
		{
			name: 'Mixing Setup',
			description: 'Steps for completing a mix',
			steps: [
				{
					name: 'Audio Input',
					description: 'Disconnect Ableton from X32',
					img: disconnect,
				},
				{
					name: 'Mix',
					description: 'Perform mix processing',
					img: '',
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
			steps: [
				{
					name: 'Channel Input',
					description: 'Each channel input will be controlled individually',
					img: channelInput,
				},
				{
					name: 'Channel Gain',
					description:
						'Each channel should be gained to right around -12 dB at peaks',
					img: channelGain,
				},
				{
					name: 'Continuous',
					description:
						'This is something that be dialed in once something has been recorded',
					img: 'img',
				},
			],
		},
		{
			name: 'Out',
			description: '',
			steps: [
				{
					name: 'Channels Output',
					description: 'This is where the mix happens',
					img: channelOut,
				},
			],
		},
	],
};
