from player import Player
from guild import Guild

player = Player("George", 50, 100)
print(player.add_skill("Shield Break", 20))
print(player.player_info())
guild = Guild("UGT")
print(guild.assign_player(player))
print(guild.guild_info())

guild2 = Guild("Test Guild")
print(guild2.assign_player(player))
print(guild2.guild_info())
