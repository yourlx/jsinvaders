import {Vector2} from './vector.js'
import {Collision} from './collision.js'

export class Entity
{
    #position;
    #speed;
    #direction;
    #time;
    #width;
    #height;
    #hp;

    constructor(position, speed, direction, time, width, height, hp)
    {
        this.#position = position;
        this.#speed = speed;
        this.#direction = direction;
        this.#time = time;
        this.#width = width;
        this.#height = height;
        this.#hp = hp;
    }
    
    get position()
    {
        return new Vector2(this.#position.x, this.#position.y);
    }

    get width()
    {
        return this.#width;
    }

    get height()
    {
        return this.#height;
    }

    Collider()
    {
        return new Collision(this.#position.x - this.#width / 2, this.#position.y - this.#height / 2, this.#width, this.#height)
    }

    static Update(entity, dt)
    {
        entity.#time += dt;
    }

    static DirectionChange(entity)
    {
        entity.#direction.y *= -1;
    }
}

// var ent = new Entity(new Vector2(0,0),0,new Vector2(0,0),0,2,2,1);
// var ent2 = new Entity(new Vector2(0,0),0,new Vector2(0,0),0,1,1,1);
// console.log(Collision.Intersects(ent.Collider(), ent2.Collider()));
