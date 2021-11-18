export class Vector2
{
    #x;
    #y;

    constructor(x, y)
    {
        this.#x = x;
        this.#y = y;
    }
    
    get x()
    {
        return this.#x;
    }

    set x(x)
    {
        this.#x = x;
    }

    get y()
    {
        return this.#y;
    }

    set y(y)
    {
        this.#y = y;
    }

    get length()
    {
        return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
    }

    static Normalized(vector)
    {
        return Vector2.ScalarMultiply(vector, 1.0 / (vector.length + 1.0e-037));
    }

    static Sum(vector1, vector2)
    {
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static Sub(vector1, vector2)
    {
        return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
    }

    static ScalarMultiply(vector, value)
    {
        return new Vector2(vector.x * value, vector.y * value);
    }
}
