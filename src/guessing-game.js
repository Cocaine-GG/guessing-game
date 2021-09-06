class GuessingGame {
	#step
	#max
	#min

	setRange(min, max) {
		this.#max = max
		this.#min = min
	}

	guess() {
		return this.#step = Math.round((this.#max + this.#min) / 2)
	}

	lower() {
		this.#max = this.#step
	}

	greater() {
		this.#min = this.#step
	}
}

module.exports = GuessingGame
