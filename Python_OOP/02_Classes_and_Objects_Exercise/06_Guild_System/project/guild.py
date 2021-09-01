class Guild:
    def __init__(self, name):
        self.name = name
        self.players = []

    def assign_player(self, player):
        if self.name == player.guild:
            return f'Player {player.name} is already in the guild.'

        if self.name != player.guild and player.guild != 'Unaffiliated':
            return f'Player {player.name} is in another guild.'

        self.players.append(player)
        player.guild = self.name
        return f'Welcome player {player.name} to the guild {self.name}'

    def kick_player(self, player_name):
        for p in self.players:
            if p.name == player_name:
                self.players.remove(p)
                p.guild = 'Unaffiliated'
                return f'Player {player_name} has been removed from the guild.'
        return f'Player {player_name} is not in the guild.'

    def guild_info(self):
        result = f'Guild: {self.name}\n'
        result += '\n'.join(str(p.player_info()) for p in self.players)
        return result
