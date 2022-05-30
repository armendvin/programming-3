class Laser {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.facingDirection = 1
        this.reload = 0
        matrix[y][x] = 4
    }

    turn() {
        if (this.reload == 20) {
            this.fire()
            this.facingDirection++
            if (this.facingDirection == 4) {
                this.facingDirection = 1
            }
        }
        this.reload++

    }

    chooseLine(dir) {
        var found = []
        if (dir == 1) {
            for (let y = 0; y < matrix.length; y++) {

                for (let x = 0; x < matrix[y].length; x++) {
                    if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length && (x == this.x || x == this.x - 1 || x == this.x + 1) && y < this.y) {
                        found.push([y, x])
                    }
                }
            }
        }
        else if (dir == 2) {
            for (let y = 0; y < matrix.length; y++) {

                for (let x = 0; x < matrix[y].length; x++) {
                    if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length && x > this.x && (y == this.y || y == this.y - 1 || y == this.y + 1)) {
                        found.push([y, x])
                    }
                }
            }

        }
        else if (dir == 3) {
            for (let y = 0; y < matrix.length; y++) {

                for (let x = 0; x < matrix[y].length; x++) {
                    if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length && x < this.x && (y == this.y || y == this.y - 1 || y == this.y + 1)) {
                        found.push([y, x])
                    }
                }
            }

        }
        else if (dir == 4) {
            for (let y = 0; y < matrix.length; y++) {

                for (let x = 0; x < matrix[y].length; x++) {
                    if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length && (x == this.x || x == this.x - 1 || x == this.x + 1) && y < this.y) {
                        found.push([y, x])
                    }
                }
            }

        }
        console.log(found)
        return found;
    }

    fire() {
        console.log(4)
        var deletedCells = this.chooseLine(this.facingDirection)
        for (var i in deletedCells) {
            for (var j in grassArr) {
                if (deletedCells[i][0] == grassArr[j].y && deletedCells[i][1] == grassArr[j].x) {
                    grassArr.splice(j, 1)
                }
            }
            for (var j in grassEaterArr) {
                if (deletedCells[i][0] == grassEaterArr[j].y && deletedCells[i][1] == grassEaterArr[j].x) {
                    grassEaterArr.splice(j, 1)
                }
            }
            for (var j in predatorArr) {
                if (deletedCells[i][0] == predatorArr[j].y && deletedCells[i][1] == predatorArr[j].x) {
                    predatorArr.splice(j, 1)
                }
            }
        }
    }
}