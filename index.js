module.exports = function SmoothBlock(mod) {
	mod.hook("S_EACH_SKILL_RESULT", 14, { order: -Infinity, filter: { 'fake': null } }, event => {
		if (event.superArmor) {
			event.superArmor = false
		}
		return true
	})
}