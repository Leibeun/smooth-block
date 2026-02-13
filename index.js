module.exports = function SmoothBlock(mod) {
	mod.hook("S_EACH_SKILL_RESULT", 14, { order: -Infinity, filter: { 'fake': true } }, event => {
		if (event.superArmor) return false
	})
	mod.hook("S_EACH_SKILL_RESULT", 14, { order: -Infinity, filter: { 'fake': false } }, event => {
		if (event.superArmor) return false
	})
}