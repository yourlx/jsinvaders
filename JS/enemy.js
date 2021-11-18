import {Entity} from './entity.js'
// import {Vector2} from './vector.js';

export class Enemy extends Entity
{
    Update(dt)
    {
        Entity.Update(this, dt);
        if(this.Collider().top <= 0 || this.Collider().bottom >= game.gameFieldRect().bottom()) //no game field rect yet
        {
            Entity.DirectionChange(this);
        }
    }
}

// var pasha = new Enemy(new Vector2(0,1),0,new Vector2(0,0),0,1,1,1);
// console.log(pasha);
