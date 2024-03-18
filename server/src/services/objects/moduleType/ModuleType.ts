class Module {
    name: string
    descriptionHTML: string
    constructor(
        name: string,
        descriptionHTML: string
    ) {
        this.name = name
        this.descriptionHTML = descriptionHTML
    }
}

class Test extends Module {
    constructor() {
        super()
    }
}

class SharedFile extends Module {
    constructor() {
        super()
    }
}

class Note extends Module {
    constructor() {
        super()
    }
}


