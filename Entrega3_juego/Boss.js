class Boss extends Opponent {
  constructor(game) {
    super(game);

    this.speed = BOSS_SPEED;
    this.myImageDeadSrc = BOSS_PICTURE_DEAD;
    this.image.src = BOSS_PICTURE;
  }
}
