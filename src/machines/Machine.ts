import { createMachine } from 'xstate';

export const machine =
	/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJUSgADuVi5KucvnEgAHogCMADgAsJAAwB2DWt0BmXQCYTANgCsFrQBoQAT3Un9JAJzfPG3bps7fX0bNQBfMKc0LDxCUmx6JlZOXgEuABUlKRk5BSVVBHMikhMtdxtzGw0bLQqNDSdXBA1PLx9PUN8tbqqIyJAKCDglaJwCYjIqWgZmCCzpWXlFJBVELXNGxE81Eis92yrPE08tKzVPCKiMMbiSBJnIeZyl-MRrExJzUzV3fXXDkybBAnEhqfaBFrHU7nS4gUaxYhPRZ5FYFTRAzR9MJAA */
	createMachine({
        predictableActionArguments: true,
		tsTypes: {} as import('./Machine.typegen').Typegen0,
		schema: {
			events: {} as
				| { type: 'DISABLE'; }
				| { type: 'ACTIVATE'; },
		},
		id: 'machine1',
		initial: 'disabled',
		states: {
			active: {
				on: {
					DISABLE: {
						actions: 'redBackground',
						target: 'disabled',
					},
				},
			},
			disabled: {
				on: {
					ACTIVATE: {
						actions: 'greenBackground',
						target: 'active',
					},
				},
			},
		},
	});
