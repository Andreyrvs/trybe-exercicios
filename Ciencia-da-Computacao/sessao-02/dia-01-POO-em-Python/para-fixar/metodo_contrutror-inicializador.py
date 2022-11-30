class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_do_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self) -> str:
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta"


liquidificador_azul = Liquidificador("Azul", 200, 127, 222)
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 444)

liquidificador = Liquidificador("Azul", "110", "127", "200")

# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'

print(f"A cor atual é {liquidificador.cor}")
liquidificador.cor = "Vermelho"
print(f"Após pintarmos, a nova cor é {liquidificador.cor}")

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
# retorno: Pessoa object at 0x7f53bbe1b580>
