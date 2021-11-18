export class Collision
{
    #x;
    #y;
    #width;
    #height;

    constructor(x, y, width, height)
    {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }

    get left()
    {
        return this.#x;
    }

    get top()
    {
        return this.#y;
    }

    get right()
    {
        return this.#x + this.#width;
    }

    get bottom()
    {
        return this.#y + this.#height;
    }

    static Intersects(collision1, collision2)
    {
        return collision1.right >= collision2.left && collision1.left <= collision2.right && collision1.top <= collision2.bottom && collision1.bottom >= collision2.top;
    }

    static CollisionUnion(collision1, collision2)
    {
        var x, y, width, height;

        if(collision1 === undefined)
        {
            return collision2;
        }
        if(collision2 === undefined)
        {
            return collision1;
        }

        x = Math.min(collision1.x, collision2.x);
        y = Math.min(collision1.y, collision2.y);
        width = Math.max(collision1.right, collision2.right) - Math.min(collision1.left, collision2.left);
        height = Math.max(collision1.bottom, collision2.bottom) - Math.min(collision1.top, collision2.top);

        return new Collision(x, y, width, height);
    }
}
