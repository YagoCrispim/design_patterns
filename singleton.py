# Problema: Permitir apenas uma instância da classe Logger.
# Se diversas partes do código criarem a própria instância e essa instância escrever logs em um arquivo único, existe uma chance de uma instância sobrescrever o que a outra fez.

# Solução: Usar o singleton para garantir que existirá apenas uma instância da classe Logger.


class Logger:
    instance = None

    @staticmethod
    def get_instance():
        if not Logger.instance:
            Logger.instance = Logger()

        return Logger.instance


class NewLogger:
    instance = None

    @staticmethod
    def get_new_instance():
        NewLogger.instance = NewLogger()
        return NewLogger.instance


def do_something():
    Logger.get_instance()

    print("\n------ Valor atual da var instance(Singleton) ------")
    print(Logger.instance)


def do_somenthing_else():
    Logger.get_instance()

    print("\n------ Valor atual da var instance(Singleton) ------")
    print(Logger.instance)


def do_somenthing_else_else():
    NewLogger.get_new_instance()

    print("\n------ Valor atual da var instance(Não Singleton) ------")
    print(NewLogger.instance)


def do_somenthing_else_else_else():
    NewLogger.get_new_instance()

    print("\n------ Valor atual da var instance(Não Singleton) ------")
    print(NewLogger.instance)


do_something()
do_somenthing_else()

print("\n======================================")

do_somenthing_else_else()
do_somenthing_else_else_else()
