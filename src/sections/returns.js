import rtrns from '../img/returns/returns.png';
import vVerbChain from '../img/returns/vocal-verb/verb-chain.png';
import vVerbNS from '../img/returns/vocal-verb/ns.png';
import vVerbSib from '../img/returns/vocal-verb/sibilance.png';
import vVerbHverb from '../img/returns/vocal-verb/hverb.png';
import vVerbEQ from '../img/returns/vocal-verb/eq.png';

import dly1Chain from '../img/returns/dly1/chain.png';
import dly1NS from '../img/returns/dly1/ns.png';
import dly1Dly from '../img/returns/dly1/dly.png';
import dly1Eq from '../img/returns/dly1/eq.png';

import dly2Chain from '../img/returns/dly2/chain.png';
import dly2NS from '../img/returns/dly1/ns.png';
import dly2Dly from '../img/returns/dly2/dly.png';
import dly2Eq from '../img/returns/dly1/eq.png';

import drumChain from '../img/returns/drum-comp/chain.png';
import drumEq from '../img/returns/drum-comp/eq.png';
import drumComp from '../img/returns/drum-comp/comp.png';

import roomChain from '../img/returns/rm/chain.png';
import roomVerb from '../img/returns/rm/verb.png';
import roomEq from '../img/returns/rm/eq.png';
import roomUtility from '../img/returns/rm/utility.png';

export const returns = {
	name: 'Returns',
	description: 'desc',
	img: rtrns,
	process: [
		{
			name: 'Vocal Reverb 1',
			description:
				'Accounts for the low-mids and mids.  Output level is controlled by the Verb knob on the control surface.',
			img: vVerbChain,
			steps: [
				{
					name: 'NS',
					description: 'Gate threshold',
					img: vVerbNS,
				},
				{
					name: 'Sibilance',
					description: 'DeEsser',
					img: vVerbSib,
				},
				{
					name: 'H-Reverb',
					description: 'Reverb unit',
					img: vVerbHverb,
				},
				{
					name: 'EQ',
					description: '',
					img: vVerbEQ,
				},
			],
		},
		{
			name: 'Vocal Reverb 2',
			description:
				'Accounts for the highs.  Output level is controlled by the Verb knob on the control surface.',
			img: false,
			steps: [
				{
					name: 'NS',
					description: 'Gate threshold',
					img: vVerbNS,
				},
				{
					name: 'Sibilance',
					description: 'DeEsser',
					img: vVerbSib,
				},
				{
					name: 'H-Reverb',
					description: 'Reverb unit',
					img: vVerbHverb,
				},
				{
					name: 'EQ',
					description: '',
					img: vVerbEQ,
				},
			],
		},
		{
			name: 'Vocal Delay 1',
			description: 'Desc',
			img: dly1Chain,
			steps: [
				{
					name: 'NS',
					description: 'Gate threshold',
					img: dly1NS,
				},
				{
					name: 'Delay',
					description: 'Delay unit',
					img: dly1Dly,
				},
				{
					name: 'EQ',
					description: '',
					img: dly1Eq,
				},
			],
		},
		{
			name: 'Vocal Delay 2',
			description: 'Desc',
			img: dly2Chain,
			steps: [
				{
					name: 'NS',
					description: 'Gate threshold',
					img: dly2NS,
				},
				{
					name: 'Delay',
					description: 'Delay unit',
					img: dly2Dly,
				},
				{
					name: 'EQ',
					description: '',
					img: dly2Eq,
				},
			],
		},
		{
			name: 'Drum Compression',
			description: 'Desc',
			img: drumChain,
			steps: [
				{
					name: 'EQ',
					description: '',
					img: drumEq,
				},
				{
					name: 'SSL Compressor',
					description:
						'Ensure around -4 dB gain reduction by adjusting threshold.',
					img: drumComp,
				},
			],
		},
		{
			name: 'Room Reverb',
			description:
				'Reverb that is applied across all channels.  Output level is controlled by the Verb knob on the control surface.',
			img: roomChain,
			steps: [
				{
					name: 'H-Reverb',
					description: 'Reverb unit',
					img: roomVerb,
				},
				{
					name: 'EQ',
					description: '',
					img: roomEq,
				},
				{
					name: 'Level',
					description: 'Controlled by the Verb knob on the control surface.',
					img: roomUtility,
				},
			],
		},
		{
			name: 'Boost 1',
			description: 'Boosts Electric Guitar Level',
			img: false,
			steps: [
				{
					name: 'Boost',
					description: 'Controlled by BOOST 1 button on control surface.',
					img: false,
				},
			],
		},
		{
			name: 'Boost 2',
			description: 'Boosts Loop/Pads Level',
			img: false,
			steps: [
				{
					name: 'Boost',
					description: 'Controlled by BOOST 1 button on control surface.',
					img: false,
				},
			],
		},
		{
			name: 'Vocal Cue',
			description:
				'All vocals and vocal effects are routed here for reference.  This channel does not get sent through channel 1&2 out.  ',
			img: false,
			steps: [
				{
					name: 'Channel out',
					description: 'Select channels 3 & 4 for cue output',
					img: false,
				},
				{
					name: 'Cue',
					description:
						'Cue this channel to hear all vocals through output channels 3 & 4',
					img: false,
				},
			],
		},
	],
};
