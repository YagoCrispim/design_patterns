# Problema: Parametrizar a classe base. -> Trocar o canal de comunicação de TCP para UDP.

# Solução: Usar uma factory estática para centralizar a instanciação das classes.


class ChannelTCP:
    pass


class ChannelUDP:
    pass


class ChannelFactory:
    def create(channel_type):
        if channel_type == "tcp":
            return ChannelTCP()

        if channel_type == "udp":
            return ChannelUDP()


def protocol_a():
    channel = ChannelFactory.create("tcp")
    print(isinstance(channel, ChannelTCP))
    # ...


def protocol_b():
    channel = ChannelFactory.create("udp")
    print(isinstance(channel, ChannelUDP))
    # ...


def protocol_c():
    channel = ChannelFactory.create("tcp")
    print(isinstance(channel, ChannelUDP))
    # ...


protocol_a()
protocol_b()
protocol_c()
