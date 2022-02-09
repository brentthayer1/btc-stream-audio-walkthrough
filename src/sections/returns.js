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
			description: 'Desc',
			img: vVerbChain,
			steps: [
				{
					name: 'NS',
					description: 'Desc',
					img: vVerbNS,
				},
				{
					name: 'Sibilance',
					description: 'Desc',
					img: vVerbSib,
				},
				{
					name: 'H-Reverb',
					description: 'Desc',
					img: vVerbHverb,
				},
				{
					name: 'EQ',
					description: 'Desc',
					img: vVerbEQ,
				},
			],
		},
		{
			name: 'Vocal Reverb 2',
			description: 'Desc',
			steps: [
				{
					name: 'NS',
					description: 'Desc',
					img: vVerbNS,
				},
				{
					name: 'Sibilance',
					description: 'Desc',
					img: vVerbSib,
				},
				{
					name: 'H-Reverb',
					description: 'Desc',
					img: vVerbHverb,
				},
				{
					name: 'EQ',
					description: 'Desc',
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
					description: 'Desc',
					img: dly1NS,
				},
				{
					name: 'Delay',
					description: 'Desc',
					img: dly1Dly,
				},
				{
					name: 'EQ',
					description: 'Desc',
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
					description: 'Desc',
					img: dly2NS,
				},
				{
					name: 'Delay',
					description: 'Desc',
					img: dly2Dly,
				},
				{
					name: 'EQ',
					description: 'Desc',
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
					description: 'Desc',
					img: drumEq,
				},
				{
					name: 'SSL Compressor',
					description: 'Desc',
					img: drumComp,
				},
			],
		},
		{
			name: 'Room Reverb',
			description: 'Desc',
			img: roomChain,
			steps: [
				{
					name: 'H-Reverb',
					description: 'Desc',
					img: roomVerb,
				},
				{
					name: 'EQ',
					description: 'Desc',
					img: roomEq,
				},
				{
					name: 'Level',
					description: 'Desc',
					img: roomUtility,
				},
			],
		},
		{
			name: 'Boost 1',
			description: 'Desc',
			steps: [
				{
					name: 'NS',
					description: 'Desc',
					img: 'img',
				},
			],
		},
		{
			name: 'Boost 2',
			description: 'Desc',
			steps: [
				{
					name: 'NS',
					description: 'Desc',
					img: 'img',
				},
			],
		},
	],
};
