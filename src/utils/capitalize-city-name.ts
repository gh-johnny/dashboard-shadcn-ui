export const capitalizeCityName = (name: string) => {
    return name.split('').map((letter, i) => {
        if (i <= 0) return letter
        if(name[i - 1] === ' ' && letter !== 'D') return letter
        letter = letter.toLowerCase()
        return letter
    })
}

