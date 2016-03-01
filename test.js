import test from 'ava'
import toSpace from './'

test('main', t => {
	const res = toSpace(`
	follow your heart
	isn't that hard
	`)
	t.is(res, `
  follow your heart
  isn't that hard
  `)
})
