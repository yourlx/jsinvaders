import {Entity} from './entity.js'
// import {Vector2} from './vector.js';

export class Player extends Entity
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
