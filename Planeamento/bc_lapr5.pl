no('Aguiar de Sousa', 'AGUIA', f, f, -8.4464785432391, 41.1293363229325).
no('Baltar', 'BALTR', t, f, -8.38716802227697, 41.1937898023744).
no('Besteiros', 'BESTR', f, f, -8.34043029659082, 41.217018845589).
no('Cete', 'CETE', t, f, -8.35164059584564, 41.183243425797).
no('Cristelo', 'CRIST', t, f, -8.34639896125324, 41.2207801252676).
no('Duas Igrejas', 'DIGRJ', f, f, -8.35481024956726, 41.2278665802794).
no('Estação (Lordelo)', 'ESTLO', f, t, -8.4227924957086, 41.2521157104055).
no('Estação (Paredes)', 'ESTPA', f, t, -8.33448520831829, 41.2082119860192).
no('Gandra', 'GAND', f, f, -8.43958765792976, 41.1956579348384).
no('Lordelo', 'LORDL', t, f, -8.42293614720057, 41.2452627470645).
no('Mouriz', 'MOURZ', t, f, -8.36577272258403, 41.1983610215263).
no('Parada de Todeia', 'PARAD', t, f, -8.37023578802149, 41.1765780321068).
no('Paredes', 'PARED', t, f, -8.33566951069481, 41.2062947118362).
no('Recarei', 'RECAR', f, f, -8.42215867462191, 41.1599363478137).
no('Sobrosa', 'SOBRO', t, f, -8.38118071581788, 41.2557331783506).
no('Vandoma', 'VANDO', t, f, -8.34160692293342, 41.2328015719913).
no('Vila Cova de Carros', 'VCCAR', t, f, -8.35109395257277, 41.2090666564063).
% no('Creixomil', 'CREIX', t, f, -8.456, 41.23333).
% no('Arcozelo', 'ARCZ', t, f, -8.554, 41.33333333). no('Vilar do Monte',
% 'VIMON', f, t, -8.234, 41.23232). no('Vila Boa', 'VIBOA', t, f,
% -8.452213122, 41.62113212321).


linha('Paredes_Aguiar', 1, ['AGUIA','RECAR', 'PARAD', 'CETE', 'PARED'], 31, 15700).
linha('Paredes_Aguiar', 3, ['PARED', 'CETE','PARAD', 'RECAR', 'AGUIA'], 31, 15700).
linha('Paredes_Gandra', 5, ['GAND', 'VANDO', 'BALTR', 'MOURZ', 'PARED'], 26, 13000).
linha('Paredes_Gandra', 8, ['PARED', 'MOURZ', 'BALTR', 'VANDO', 'GAND'], 26, 13000).
linha('Paredes_Lordelo', 9, ['LORDL','VANDO', 'BALTR', 'MOURZ', 'PARED'], 29, 14300).
linha('Paredes_Lordelo', 11, ['PARED','MOURZ', 'BALTR', 'VANDO', 'LORDL'], 29, 14300).
linha('Lordelo_Parada', 24, ['LORDL', 'DIGRJ', 'CRIST', 'VCCAR', 'BALTR', 'PARAD'], 22,
11000).
linha('Lordelo_Parada', 26, ['PARAD', 'BALTR', 'VCCAR', 'CRIST', 'DIGRJ', 'LORDL'], 22,
11000).
% linha('Cristelo_Baltar', nd0, ['CRIST', 'VCCAR', 'BALTR'], 8, 4000).
% linha('Baltar_Cristelo', nd1, ['BARTR', 'VCCAR', 'CRIST'], 8, 4000).
linha('Sobrosa_Cete', 22, ['SOBRO', 'CRIST', 'BESTR', 'VCCAR', 'MOURZ', 'CETE'], 23,
11500).
linha('Sobrosa_Cete', 20, ['CETE', 'MOURZ', 'VCCAR', 'BESTR', 'CRIST', 'SOBRO'], 23,
11500).
linha('Estação(Lordelo)_Lordelo',34,['ESTLO','LORDL'], 2,1500).
linha('Lordelo_Estação(Lordelo)',35,['LORDL','ESTLO'], 2,1500).
linha('Estação(Lordelo)_Sobrosa',36,['ESTLO','SOBRO'], 5,1500).
linha('Sobrosa_Estação(Lordelo)',37,['SOBRO','ESTLO'], 5,1800).
linha('Estação(Paredes)_Paredes',38,['ESTPA','PARED'], 2,1500).
linha('Paredes_Estação(Paredes)',39,['PARED','ESTPA'], 2,1500).
% linha('Cristelo_Creixomil', 20, ['CRIST', 'BESTR', 'VCCAR', 'CREIX'],
% 15, 3300).
% linha('Paredes_Arcozelo', 21, ['PARED', 'MOURZ', 'CREIX', 'ARCZ'], 23,
% 2800).
% linha('Parada_VilarMonte', 22, ['PARAD', 'CRIST', 'DIGRJ', 'CETE',
% 'PARED','SOBRO','CREIX','VIMON'], 48, 3560).
% linha('Cete_VilarMonte', 23, ['CETE','MOURZ','VCCAR','CREIX', 'VIBOA'],
% 29, 5200).
% linha('Lordelo_VilaBoa', 24,
% ['LORDL','ESTLO','CRIST','BESTR','CETE','VIBOA'], 19, 2500).
% linha('VilaBoa_Lordelo', 25, ['VIBOA','CREIX','CETE','LORDL'], 10,
% 2000).
% linha('Arcozelo_VilarMonte', 26, ['ARCZ', 'CREIX','VIBOA', 'VIMON'],
% 30, 4900).
% linha('VilarMonte_Paredes', 27, ['VIMON', 'VIBOA', 'CETE', 'LORDL',
% 'PARED'], 48, 10300).

horario(3,[34200,34680,36780,37080,37620]).
horario(3,[36000,36480,36780,37080,37620]).
horario(3,[37800,38280,38580,38880,39420]).
horario(3,[39600,40080,40380,40680,41220]).

horario(1,[36000,36540,36840,37140,37620]).
horario(1,[37800,38340,38640,38940,39420]).
horario(1,[39600,40140,40440,40740,41220]).
horario(1,[41400,41940,42240,42540,43020]).

horario(11,[27420,27900,28140,28380,29160]).
horario(11,[28320,28800,29040,29280,30060]).
horario(11,[30120,30600,30840,31080,31860]).
horario(11,[31020,31500,31740,31980,32760]).

horario(9,[29160,29940,30180,30420,30900]).
horario(9,[30060,30840,31080,31320,31800]).
horario(9,[30960,31740,31980,32220,32700]).
horario(9,[32760,33540,33780,34020,34500]).

horario(8,[28860,29340,29580,29820,30360]).
horario(8,[32400,32880,33120,33360,33960]).
horario(8,[36000,36480,36720,36960,37560]).
horario(8,[39600,40080,40320,40560,41160]).

horario(5,[30360,30960,31200,31440,31920]).
horario(5,[33960,34560,34800,35040,35520]).
horario(5,[37560,38160,38400,38640,39120]).
horario(5,[41160,41760,42000,42240,42720]).

horario(24,[26700,27000,27240,27480,27720,28020]).
horario(24,[28020,28320,28560,28800,29040,29340]).
horario(24,[31980,32280,32520,32760,33000,33300]).
horario(24,[34620,34920,35160,35400,35640,35940]).

horario(26,[29640,29940,30180,30420,30660,30960]).
horario(26,[30960,31260,31500,31740,31980,32280]).
horario(26,[32280,32580,32820,33060,33300,33600]).
horario(26,[33600,33900,34140,34380,34620,34920]).

horario(22,[28800,29040,29400,29640,29880,30180]).
horario(22,[30000,30240,30600,30840,31080,31380]).
horario(22,[32400,32640,33000,33240,33480,33780]).
horario(22,[34800,35040,35400,35640,35880,36180]).

horario(20,[28980,29280,29520,29760,30120,30360]).
horario(20,[30180,30480,30720,30960,31320,31560]).
horario(20,[32580,32880,33120,33360,33720,33960]).
horario(20,[34980,35280,35520,35760,36120,36360]).


horario(34,[26580,26700]).
horario(34,[27900,28020]).
horario(34,[29220,29340]).

% horario(35,[]).

horario(38,[27300,27420]).
horario(38,[28200,28320]).
horario(38,[29100,29220]).
horario(38,[30000,30120]).

% horario(39,[]).

horario(36,[27300,27600]).
horario(36,[28500,28800]).
horario(36,[29700,30000]).

% horario(37,[]).

:-dynamic liga/3.
gera_ligacoes:- retractall(liga(_,_,_)),
                  findall(_,
                           ((no(_,No1,t,f,_,_);no(_,No1,f,t,_,_)),
                            (no(_,No2,t,f,_,_);no(_,No2,f,t,_,_)),
                            No1\==No2,
                            linha(_,N,LNos,_,_),
                            ordem_membros(No1,No2,LNos),
                            assertz(liga(No1,No2,N))
                           ),_).
ordem_membros(No1,No2,[No1|L]):- member(No2,L),!.
ordem_membros(No1,No2,[_|L]):- ordem_membros(No1,No2,L).

caminho(Noi,Nof,LCaminho):-caminho(Noi,Nof,[],LCaminho).

caminho(No,No,Lusadas,Lfinal):-reverse(Lusadas,Lfinal).
caminho(No1,Nof,Lusadas,Lfinal):-
    liga(No1,No2,N),
    \+member((_,_,N),Lusadas),
    \+member((No2,_,_),Lusadas),
    \+member((_,No2,_),Lusadas),
    caminho(No2,Nof,[(No1,No2,N)|Lusadas],Lfinal).

menor_ntrocas(Noi,Nof,LCaminho_menostrocas):-
    findall(LCaminho,caminho(Noi,Nof,LCaminho),LLCaminho),
    menor(LLCaminho,LCaminho_menostrocas).

menor([H],H):-!.
menor([H|T],Hmenor):-menor(T,L1),length(H,C),length(L1,C1),
    ((C<C1,!,Hmenor=H);Hmenor=L1).

plan_mud_mot(Noi,Nof,LCaminho_menostrocas):-
    get_time(Ti),
    findall(LCaminho,caminho(Noi,Nof,LCaminho),LLCaminho),
    menor(LLCaminho,LCaminho_menostrocas),
    get_time(Tf),
    length(LLCaminho,NSol),
    TSol is Tf-Ti,
    write('Numero de Solucoes:'),write(NSol),nl,
    write('Tempo de geracao da solucao:'),write(TSol),nl.

:- dynamic melhor_sol_ntrocas/2.
plan_mud_mot1(Noi,Nof,LCaminho_menostrocas):-
    get_time(Ti),
    (melhor_caminho(Noi,Nof);true),
    retract(melhor_sol_ntrocas(LCaminho_menostrocas,_)),
    get_time(Tf),
    TSol is Tf-Ti,
    write('Tempo de geracao da solucao:'),write(TSol),nl.
melhor_caminho(Noi,Nof):-
    asserta(melhor_sol_ntrocas(_,10000)),
    caminho(Noi,Nof,LCaminho),
    atualiza_melhor(LCaminho),
    fail.
atualiza_melhor(LCaminho):-
    melhor_sol_ntrocas(_,N),
    length(LCaminho,C),
    C<N,retract(melhor_sol_ntrocas(_,_)),
    asserta(melhor_sol_ntrocas(LCaminho,C)).

:- dynamic sol_mais_rapida/2.
plan_mais_rapido(Noi,Nof,HoraAtual,LCaminho):-
    (caminho_mais_rapido(Noi,Nof,HoraAtual);true),
    write('Tempo Total:'),
    sol_mais_rapida(_,X),
    write(X),
    retract(sol_mais_rapida(LCaminho,_)).

caminho_mais_rapido(Noi,Nof,HoraAtual):-
    asserta(sol_mais_rapida(_,100000)),
    caminho(Noi,Nof,LCaminho),
    atualiza_mais_rapido(HoraAtual,LCaminho),
    fail.
atualiza_mais_rapido(HoraAtual,LCaminho):-
    sol_mais_rapida(_,N),
    calcula_tempo_total(LCaminho,HoraAtual,X),
    X<N,retract(sol_mais_rapida(_,_)),
    asserta(sol_mais_rapida(LCaminho,X)).

calcula_tempo_total([],_,0).
calcula_tempo_total([(Noi,Nof,NumLinha)|T],HoraAtual,TempoTotal):-
    calcula_tempo_segmento(Noi,Nof,NumLinha,HoraAtual,Tempo),
    HoraCorrente is HoraAtual+Tempo,
    calcula_tempo_total(T,HoraCorrente,Tempo2),
    TempoTotal is Tempo2+Tempo.


calcula_tempo_segmento(Noi,Nof,NumLinha,HoraAtual,Duracao):-
    horarios_linha(NumLinha,LHor),
    horario_possivel(Noi,LHor,NumLinha,HoraAtual,Horario),
    linha(_,NumLinha,L,_,_),
    nth1(Pos2,L,Nof),
    nth1(Pos2,Horario,Hf),
    !,Duracao is Hf-HoraAtual.

horario_possivel(Noi,[H|T],NumLinha,HoraAtual,Horario):-
    linha(_,NumLinha,L,_,_),
    nth1(Pos,L,Noi),
    nth1(Pos,H,Hora),
   ((HoraAtual<Hora,Horario=H);horario_possivel(Noi,T,NumLinha,HoraAtual,Horario)).

horarios_linha(N,LHor):-findall(Hor,horario(N,Hor),LHor).


bestfs(Orig,Dest,Cam,Custo):-bestfs2(Dest,(0,[Orig]),Cam,Custo),!.

bestfs2(Dest,(Custo,[Dest|T]),Cam,Custo):-!,reverse([Dest|T],Cam).

bestfs2(Dest,(Ca,LA),Cam,Custo):-
LA=[Act|_],
findall(
       (EstX,CaX,[X|LA]),
       (liga(Act,X,_),\+member(X,LA),estimativa(X,Dest,EstX),estimativa(Act,X,Dist),CaX is Ca+Dist),
        Novos),

sort(Novos,NovosOrd),
proximo(NovosOrd,CM,Melhor),
bestfs2(Dest,(CM,Melhor),Cam,Custo).

estimativa(No1,No2,Estimativa):-
no(_,No1,_,_,Lon1,Lat1),
no(_,No2,_,_,Lon2,Lat2),
P is 0.017453292519943295,
A is (0.5 - cos((Lat2 - Lat1) * P) / 2 + cos(Lat1 * P) * cos(Lat2 * P) * (1 - cos((Lon2 - Lon1) * P)) / 2),
Estimativa is (12742 * asin(sqrt(A))).

proximo([(_,CM,Melhor)|_],CM,Melhor).
proximo([_|L],CM,Melhor):-proximo(L,CM,Melhor).
