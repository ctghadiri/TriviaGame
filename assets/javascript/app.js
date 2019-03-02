var round = 0;
var correct = 0;
var incorrect = 0;
var timerRunning;
var board = $("#board");
var time = 20;
var intervalId;
var questions = [
    {
        question: "Who is the richest superhero?",
        choices: ["Iron Man", "Mr. Fantastic", "Thor", "Black Panther"],
        Answer: "Black Panther",
        img: "https://i.redd.it/5a3d983l01411.jpg"
        
    },
    {
        question: "How old is wolverine?",
        choices: ["????","137","195", "261"],
        Answer: "????",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WnZ4IfLkaquUuRqm3ZtSyw0wow7RsNphkIrHanYGcjG5aOZaGA"
    },
    {
        question: "Who is Thanos' romantic rival?",
        choices: ["Doctor Strange", "Iron Man", "Hulk", "Deadpool"],
        Answer: "Deapool",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUWFRUVFRgXFhUYFxgYFxYYFxcVFxcYHSggGBolGxUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQGC0fHR0rKystLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS03KystLS03N//AABEIALEBHAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYHAAj/xABCEAABAwIDBQUGAwYFAwUAAAABAgMRACEEEjEFQVFhcQYTIoGRMkKhscHwI1LRBxRicoLhMzSSsvFDc8IVJDZTs//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgICAgICAwEAAAAAAAABAhEhMQMSQVEEMhNhQkNxI//aAAwDAQACEQMRAD8A6SVUxVB7yvByrZHlqmlqiJcrxXQAFIpMtFUqmTQQak0MpNSQKUN0y0iKSaRKDU7uqUMUbGkdKqksqqJiBFPw7tBxY1ExI5xR0uVQ9r9od2woJJCjluNQM6ST6A1K8cfa6idnZQAXXQDAUUgjeJjj8KpNo9qgJDCAB+Y6/OaxjeMKypUkgG5JkniTeQKG5iJ0Mijbsw/Gxna1xWPccutwnkD8h6VVv4giozmKi1QXsTzqduj+OSJ6toqHGrHZ3bBxswrxp4K18jqKyyn5vQFqp7RlhjZzHYNl9oWHoCV5VH3VW9Doat0rIrh+Gdy74G/pvPpNdC/Z/tdTzSm3D4k+NAMWbNsg45Tbzqpltxebwek3G2bfqS25VWjWpraqKwlTUrp4XUTva931B7TO8pC5UUO04KoGxiumFdMrxoDxVSZqQ02hIk09KqCKWgbFily0ELp4coNVk0gp5FESkUyDSo0Sly06KQNAr1eJpE0GMhFSWm6Y1R0qoVDw3SlApAqkUukav2g1wqqCyK0fdzUV/Ag1UqbELDv8ayeOd/eHlibBC1emg+fpWm2u13TK1co9TFZ7scxnceJv4Qj1BJ+JNL5a+OawuTGO4EkZgI4cB03jyioP70oEpUnhffchIJ4iSkcbjWtVtdgpw4UnWN3TX51hcQ/4pJgaGLWUIJ8pnyFOw8M7j0mqdm9Q3VUbNM+pjiqcw8lhY8qE4jU1i9HuI6lUFWIG6T8vU/QGn4hQAjfp0/N9E/6qhg1pI4vJ5LvUOcfUN9jr9wK0/ZbahaebV+WyhxSbKHoTWYy1YYdUOefzv9aLNF48rlLK7ujiLjUdNxqQmqnsviO8wzZ1IGQ/0mB8Iq7QKpya1dGQaUN0YU5MUgahFESmvZqTvKDEAogboAcp6X6D3CLRQ4oilzTCKCpKQmvGvAU0mEV6q3aW18g8IzHidKrdnYx54KV3uWFFMCALAH60wtiacF0gFKtNAO72lC6ClFPCKQlGSinhs05g1KTFJURgYpe8ojsVCcVQd4TEP08u1VlRr3fmjRey1S7RAuqpGJo4xNGj9kPtsv8A9tA3rSPgo/SqDsIkgKXrmdVHQEI+hqz7Xuzhx/OPkofWsP2p22rB4ZDLKsrykAlQ1QFeJSh/EZgf1Gidtrf/ADk+6vMahtLagVJsIuU7rca5fjwMxi4M/Gs8FuKMJK1HlmNe/enE2VPQ09oafZyswHKx5yD9W1f66I/67+twEjzUU1XbExQUrWDExzBSfkFetTcViAhKyTutf3jKR6FwK/orKzl3YZ68O1biVBRsOXWLBXn7XVRoUVEexonwjp03UIY1XKtNuFZtC461M/6n+k+tvpVbs/EFSwD5RVo63lcHMfIn9KL0vx/s6l2AxH4CxwWD6pj/AMa0oxNZDsB/hu/zI+S60hFVJww8t1nU4Ymipfqsozaqemfsn95Xi5UdJpQDS0Ni95T0qoQFESKBsRK6eXOJrzDMmKkv4QpBUEpVbQ/qL0rVyWq13aLSfacT03npWZR23zOlIaKAgjOFQVFBsFgpJBHTSrJ3sp3qi4vOkHRAkgeYuekVmNsbMwqF2GVaQQlUqngddQYuKcLmdp22sOsKlJ8J8SenCetRcOt1IPdqABMndeAPoKJsXaYU0Wic6kf7ZA1PJafSqJe0iCQJiaA6RNJnq3/9MFQsRhCKWyuNiMhdPK6bkp3dUym3ku0VOIoHdU4MGg5aMXpoZr3cK4U29Ibp4FOLIoGaiJdoOUxbNDKTUgroS76GCbA8DuNMqrtvtnuRb3x8jXMu3OEw6sWsO4haQUtx+GcqczQKRM3A1PnVbiu0OJw+IWpK1Ql0hTZUsoVCiCkhRMWB8WomvbaxacUF4tECFIbiZUPCAFFESTGUTMTSvbox/SR07sdhsMjCNpYS2FBCe9jKVFceIlWqkkyQrQjSqrt1szDOtw5lS6TlaIjPmOgtcpnWbASa5Gh0JOVUxqLyROsxv31qOy+CwxUVuAmBaT7Rg+HiBEyeE1Xtwn15R9jdmiBmJ1AgiYhRBCp4FKVHzHGqnbOFVMZioTv6H9BXT23QELVAzZTugCdY4braeG1jWA2iASQTv+/iAfKsN8vRvi14tXs/sV2bZxBUp5U5T/hgwY/MTqRutW2e7GYNacvchPAoJBHOd/nXNIIOZKihQOoMEeY9PKprm0sS42e9xDhb9mJkE2soAyRcag10Y5YydPNstqC/hgxiFJCwtCFlIWDYjQGfvQ1YLx6FrSASbaxAk5hbfFxVRjyO7F7qM9K9gjCk9RvjePQ/pUX6Xjdcu29hmIw5P5lj4IT+pq+xDcCa5Z2K7Z4gPssQ33K3UtlOW/iyozBYvmFjexvXUtuuFLcinKy8k3laCxiBvphxfigCqrCvyN9HbVerkYWpydpcqcztUE1WYpFrULDpEUr2qThrsIsL0qWpvKkmP+aqNgOXipXabaAbQBME6cSTYADedam9qnWz2tqtNqOZ3LGoAB+JP0o2G7TMLVGcpGoK0pgxwg1zd9ta5uATJgm/+kSqeoqO6Q2hRUtJ/lVKv9JAp+sEyrZ9pO2C0A90tGWPaSDmG7f8xXNsXi3nc2h3gmbedDxm1G1J4q4GRVQy6txxLLaspWQm+iQdVdAJPlS3I0mNq87KYk/iEAqXkUkDWZUjLYcChV60Oz9i5U/iwVKObjAgAD4VN2FsdvBs92klah7bkRnkkgi9k3iOtPU+rn6UFeK6dUbEgRTV4igLcmokXahrTenIFEKKI0imzkI2gVJQgUyKck0lwctior2DmpbelPoPW1I5hiKGpo8KvMopHWxFP2T6KApobtgpXBKlegJqxdZvQVtcRVbZ3F8+7ezvHvyB+KZWbJHeGSuACTkEAzERVdsh1f4jIUoJIz5RopSbXTIjwk33RW07XdnkNYtTSWylLqS4zGYwQIKEBMqXEkBA/gGlYxtot4psRfOlEeEnx+HxBJPi8VxPAUq3x6QisocSSlKoI8J9m/Ibr61YjGOsnvAMoUdDodFWGsTwAFhrFg9oMLkWpJUlREg5VBUEEyCUiCdNLUfGuh1ptSRlhMKAvN8okJBVJMCVEbgAAKVVLrlrsPthHdKJ0UkEaHX7+FZh94KMiqjD40hGQ7tOlDbxG7iaykd2fmmWqNjpF/v7/tUdlcp9dw/5o+OkSlViCQeRFiKhsK1H1rRx563uHYxOkaQKNg13Gk28vWgYo6VJwnXcd/I7omnO0VpP2YIKto4aBMKcUeQDS7zyJHPSuzdox+Eelc//AGHYNJcxDpuQhtsaGM6lKVBH/bTXSO0yPwj0pxnmyezhUxQvUPZ+n96nZr1rHPTcYg5aiYE8am4snLUPBJmpva500mxPaqD2xdylTh1SMjf8Mjxr9LevGibOdKTMc6BtJJclboEFVvyp3zfU86nLsY9MqcQFNyEnNpPsz5mJFQsWFBPsFQiTlIV5wKv8RtBhN4U7BslIJSTO8jdWj2djmVsLU/gltIAkd20u/NUjpb1ouWl447cexrwKFEKHh1BsfKdKXsGznxClq3JI9bfSKL2wfbcWoo0vBgA24xROwUJQtWsrCfS//lWeTr/Hx3k37jqgn+Td/DP0P3elL8+78RUZe08igqLXSZiDUFWJLZKQQoagiNDTxyLz+K9x04GvUJKqLTczwNLNMUaZnoLY2alC6Bnr2eg9pQxFIrFGo+alFB7GbxBmil81HSKWgbOCqRYpop4oDGftRw4GDD8rSWV+0gArAcSUGJIGWcszaJrl3aXs64ygOOKAVlTlbBzlIy5pWqEpmdyQoCdTFd723s9D2Geac9lbagYiRaQRNjBAN7Wrnu1cEjE4sMrKi22C47xKRISAQZBUoAGdAbXoVix3bTsyhnLlW4pSvEuUtJRJAJKUIOuYqtoBEVV7I2etzCrKUwhKlDMpwBKim5AbLgBIzoM5SZVratr2l2LisW7mJQ2jQZ5m591tOZatQIgbr1UY7aLLeHRh8Ko5EFRJJkrKjClyABfhFrDdRpTBYzDqSq+mkjT5CmYcwtPXlw51a43xNq46i15HCqXNoamzlUu4kO3BPA/DpQGVfd6KymZtx8uf96Gw2Dvg/e+aZCPRKd/G3w1vVthsMlRIGbQlAK0+1E+LURY21IA0JqI8wCkEC4PEm2kfGpmAaKikAgSckkwkFXhBOpAk6xT0nbq37H8B3eHK82YurKugR4Ak2FwQrjWz7Rt/gq6Vlf2TOpOGDY9tpxxKxwKnFqHwPwNa/tGfwVdDT+Wd+WL2dpU3MAah4BNS1pvWsYUrrtjag4Qj40XEC1M2HdYkTBmOMaCpq8el0nDEN+0EA3JIlR6A2HnPSvKwbZbAZUFLmVDL3ijG8KvUHbGLSlQU5C1TARqgf0+8eZ9KsnO073dZksPn8pDSwnSIEJqKuKBxSA8cjbqliPAEKEEi8yLVI23tt1DBaebU2CJTIifM6jTSqXEbTWvMVFUkyQoGR5ETVM88HCQ5KhwBgJ8uOl+XoTGDbObbalalAGJIkjUcam/s+bLhW1ITCgokgmAYEwNbiIoe0kd0MqvEkg5TwMWBroPZPYq2kKRhm2GwW0S68IcWobwsachRlJWvj8tw5nZ22dijDq7tbgIhKsxGSJ3X39KpHcC77glMSL1e4xx5S0tujOQQCUrzAyJm/KjuYrMZLZ4acPKn/HBPys408RXs9ITTaTE7NSAV6lTQC5ac20ToCalNsJSMzigOW7zNR8V2iZbEC8bhS5+Fanyf+5L4D1FMU0RrHqP1rO7T7WOKBCISI4SfjpWO2h2iVPiUT96jh1FV6/ZcfDpuJxzbQBdcSgHQqIA9dJozL6ViUKSocUkEeoNchZ7Vuo9hRj3gTbnO6NPWp2y9u4R1UOp/dlG3eMx3ZOsuNRkUJjcOtFitVvcR2jwySR3gUU+1k8UctbmeFU6+3qL5GCoDisD5A1R7RxBNwUPgGJSbORYKaXMhW/IomZt+WqRpDD09093bk6LEX3hYsDffCai8Orx+Px5RuWu1ysQhzuUZUhKEqC7gFWYqUVJuRlRACbnNyvTba2gncNN0ZEyPeypN/wConoKzaMQ/hUFpKAXVuhYSD4VJ7uFKzxZAOUyY4b6hbRcWZLzhUSIKGyptoA7ifbc3fl86crPLHWVJtjbTi1tpStRUhYWlCATKkHMjwo3Zo3VTbWxEvOryFvO6tWQxKM6s+UgE35c6kPY8togLDaFapb8AVGgWB7f9U1V4rNcqQU6e0MpkXNjfQ0JGSg5YAJMcOX6VQvIgxWqwi4IO4EehAP1NUG1mcqo4W9LUZTgSm4FIkSYE7o+tvga9imMqiQPDu/SojS4MirbC46cqdJUAOAmBMf8AFKAuFeERBPKiwlMQbnUHjNvnTX8RuHQjQc9NaGHYtput/aqJ0/8AZBjh37jYCiXElxajlAzJVIATr7yvuK6T2iT+Eelcc/ZZjw1jMykA/hOC6ikj2ZjnIAvz611DbvaZjuxIVClBJhSZvaxNpkjXjQjJnsKmpOa9TsHsjMhLveoS2sZkE5iqDxATqNDfWh4jDMJurFoHVCx8b1pLGFxqK+7FLsJUuEiBANzoOZqMXW1qKW3W1kAnwq3DUwQD8KnNMFtGWSBAW6RY8kA7jGp3ec1OSseuWi2Hs5CFd7lzrvClEZjPAe6OgqF2z2A7iAlbaUoUiSoEnKZjgdbcJoeA26lCAUpCEAWFpPFXIc99WDPaZKRMSkC494k6eZJA5VGq09p05htvCYlCSh1m3FKlfI3+FZbvVJnxGN4m4rvO3XmXGi5AUqwIN4tokdfM1zztJ2VVJPd92SJiwInkNOkmhW2AxGNJypVdBWkqvqAdOldF2WraGNRDWZDWUpyBQAMdY4Vzfa2zXG7EeEXBG7rwrSY7tM+lpCGlFtOUA5DEyLz60SizfS8wv7804B4iUqi6QrTdpUxO2cSJltMydULB+BrBtdoH02S6tO+UrUL8bGlX2jxBJPfLk3MKNzvPWr94X8VduONFDOPFQu6pVs0tMt1L/fxRcZtAMozH2z8OVAwOFjxndp141QbdxGZVzpuokObA2jtZxy5PTpVavEE6nrUr9wW5pbnUXa2xVtJmZkcfnVbXMVdtXaCkoJEX48N/nWXxD1/zE77x5A67hepTuJJCs1im4H9tKq1vgEkC945ffCptXIT94MkC2o6xcTxsT6UJRIoOHV4uNxJ6yPrUvEG1IxcDtxxqRMp4G4omJxAWoOomFSdbpUPaE8bg8weRqieBn70ozOJCW0JAuXFLmbgBISLf6qVXhdXbSN7XWhHjJIF5AJB3abjyqOMYhwkrcUkiyW0JBcMR4lOGUI6JCj0pVONhmVKgKGVSLlUm3hgbr3rPIdKTlSmCOV9I0PzNTK1805lXyNolsktAIKrZgM7pHDvFysH+XLVftHaBICFSSFqXdWY+JOVQi5k5Um97UrOCkFTjgT/CnMpwi4vAJIkHWKVDSUCUsPG5vkSnnGY5iKNs/Wmh4jKBMkC1uG+dP+KbtBgqbJVY6xMzvJJ+9KelC0nvDhlTxWuQOgyi9EW9mRpE8/Klcm2Hhmue2cb1omh5aihRRl6DrTjnSe8H5Z6lRn0Ipq3OFulLISRASbJN4VqkGL230glZ4/ADyFhTJf8AZrEhBJyjN4QDJkAkkpA0uQDP8I51evvZwtMEKUkQRxEqT6GKzOBASI36k89xA6VZqxQSSRNwQIJ+W8a251c6RY0Gye0a0td1nJSQHBECM8hYERYrSVf1GqrbW084i/LWs8+/lyaggrSeYkFJ5HWnJczUSjXOxEL46/f1qxa246lRCXDBPiSSSlXK+nlVM85Cun/P0FCYczKA5j14CkenX+zjaMajOhJlBhxJcEhX5TxSRBB4Vp9k7GBcGbDiEn/7pJjfExHLlXN+yS+7x6m4BQpvKQNCpJBA/wBw9a6I1jUg3ASpRuRIhAur1snoTRWetVp8Pgmjlc7pLaUkqSLbtFq+Y9ej8ay0tPeOkBAEjNYfzEHXkDWUxHaWXAgKUWx4iDHsjdHUjfoTVZjNsrdeSHFSknORuKU+7HAmB0JpetX7Ra7Q7IB5JXACDdIAhWX8x4Dlr0rGbf7OPoBUW1LSUgIVkkWERpwAvv51ssPtpbjviMoTKlJmyzolGthPwHOrbDbeQ+pQdTCG4zbwpZOnMDXzFFlKWOIL2K4ESWFEn8qVfoa83sgxZpznKDrytX0A08y8FOKy922SL6GNVEcBoByNZ3aeOwqF/iOd0VAKShKUmEn2SqfeIvG6RS7aS6YVW3nKPszGvYh1DSTGY3PBIupXkKm9mNntrMLAnnW22fspppYKEgEpiQNxIt8Ke2PqFtVxLLPC0JHy+VYHGY0Ilaz0Gh36Vpe2OKKnMg0QL9dTXMe0OJK/Ikcqa5Bsf2scFkHLfmKgDtW6o+M5hvnz/WqXEHiahKQd1LatL/ErDpzp1vIG8Vn8elSVQeo1vR2saWxEc+E9aM+6l9OgSReTpv560Gr8Ir/x/wByalPOVEbbKfaBEgESIJEiDfcaety9jxieN5J5CgiOb509/jyQOdMQqVCf4bRYZjp6EUZxjOpLegzJB6rI1/ii58huomz8MXnfDACndSYASnidw9m9Ts0liE5JUqSgHwyFJJSDIIvqDblWk7P9klP/AI+IdQhlByBS1ttl6Bo2pUZkjebncLzFQoJxGIDeHbU54sraUD8RZE+KARBVcmfZB5VebX2EppxtvEYoOYhUSywkEISNUqcMJAEAQBAgiTU7+XT671jO11i2WG0/hpaUP4MikyBe8kg9TVDi8RwlPCN3kbVWbYaSypXdqKiAE2JjnM6/AdKg/v8AmEcNRv8AL9K0mcrLy+LLx5aojye8KkqyzcpI8JPK9p1qCU5REg/AgjjT3XAdKjPOkzOsG/lv51NxPDy35VSdam9yCJBniCD8wIqCKl4ZatEqipGMl4orLG/hy+pt8altNecbzoPL9aGhJ95RMfDpUgCQJ9n3R+b+IzeKc3VWY4cpGEdU6nxOCUAJbTEeC9kndc2G+fVzKt3zj60FpMfU1IZelXhSVHlx+9TWkc9u7sDa7ZhCzErccG7dG7hNAwhBGbQAeh4UTarksoCR7Di3CeJVl0HAZd/Gq7EvBJUBaTfgRqD1/tS2dleDtyfv7tVhstvJ+Mq0DM2DvO5Z5A3A946WBqHs1AJJVrEidLG8iLnlS4rEFauQ0pkvtg7QUl0OgmUkkHeSePrV8/2peC0qKibEaDfpWNbcyQOhNaNGze+SChac2uUmD0pUcEc2+4HQqdRHy3eVWOz9sZ3SVi5SBqeNz8qq17HdWMwEqQfEPeHUUNzDOpyrAtpNvjwpciyNnszaMZyDFwLcIJ+tSsBjhkKgqDKyL+Qt5Vz84h1CyCDcfLfTcPiVmfFBG7rVeyPR1fGYwIaQPcAClDcoJuEnjKvrXO9vufvDynXVeJWsARG74U7aL2JcZRlWVpjQRNjJ0uaz6lOE3nhejZ44/wBurdnnwFpmtR/6hClKtYkDokR8SKxuycI46oBsXnXd1q72glSJSToBMb98i1Z+PmIl2z+2cbJUd5nf69ayeMQDcgAcJ8R5k2Avug1fPYV11XhSYn2joBxJNTMN2bQm7pKla8h5frWmmjnzrEnwpJ9T8RUdzZ7h0TGv3a9dHxbbaQAkDoKze0FzKhCQDlKz7IOkCPaV00p+o2yGIwOUXB4k8Lb5401gFKS73YUkGAFCUJJFiQfbXFwNIIJ1qdimyo5TIvcT4urh93pqAdBUHa+GgymTfWBw4D5Ru31FaTG63rhCxWK7xWaIO8kkyeJoSnOl9Y4DdQ16860exOypeCcyikrGZIAFkblqJ0ncNTra1LYmNvSvwCiSNSTmVAEyqCEgCLnMdOVbvsf2XDTRVifaWLoNgE8Fmd8XFhuM3FT9nbFZwLZXqUjxOKjOTuSn8o5DzqnZOI2gowtTeHHhGXerhxOpgndFqF446v8Aa72121DDZYwYHeKBSpaRGUaZUkRCRy13QLnG4XE5MyioqWq61ceVbJX7Nm8ksvLCxrOVQ9LK3/8ANYjamBdw7ndvIyqiRwUPzCPOpvLbHPV2R9zNrFVeOaNiDpYaT0PGilV7U9yMpn5/d6XTTjOaqA2/PXf140LEuWgedNLniOXfQ3E1fs4vXkKiNqpkUkUh0sG8RMT6bvOpaHSbmqdCooyX6qUrurxp1OqvZG4aqP5RwHE+VDZTmnRJ3pFoHLlzFQ2yo6QBuo5VpmWi2loPkRcVNrbx4a5qzQxlESCOH3urMY1BCynhby3Vd4fHZTchQ4j6j6ipLzDTwki+5Q1H6/GhWU9pwo2VRHkfMC49P9tH38KK5swpkzKdxTqOahu06UqUHkemvWPvpVSxh6ZfR2GbkgVucNss9w2tM+zYpIzJIJFwfaFqyGBxwQIWhLje9JsQeKVi6T8OI3V1bsHjcEvD93JcUlSjC4CwkwYIFjBm4+FXrhllbGNXjHpG51NgqcuYflPEcjpRGFKMkpVH/UQYJH8Q/trXScanAmysOFffEXqA5s3ZxP8All2Ej8V0R0hdqnVL2jAusJ0PiQfZWmTl5K4RUcsIzCBKzYZB3iV8oTcGujfuOBQMwwuY83HifOV0uA260k5W8G22OIAHqdTT1S945c5tpLMpCFAhR8JsUqHA/Qiq93tC4STlTe50/Sp3bJmcW+QIBXmjcMyQfmTWdpVcfRnZHZKmGyXYzrOn5U7h1Op8qs9pbP7y6SBA+7a1TY/tKEryoBzH2RkcUojilptKnCOqUjnVXj9rvAeJl9Zgk5ncHh0AASVZHHFupSN9xRuQTx2p+LeDdgLj58Y3ms7tTH66+io09BUkpw7hIW+6FiApDTj5AMSfxXFDQawnlVFsfaedbq4HdhWVtJgwlNgZMkqMSSbkk0/eN8fxcr8oOOx2Y+9kFoQPE4fyIi45qqnfcedUO7Qpa/ZAaSpSWU6BDZSIzne5uuBvNXm3dpOuHuWz43ZBymyW9DG7xXk8OtG2gsYXChps/iOfhpiwSD7ZHPdPOoyztdHj/EnzWZZ2W46cjCUKCfCpSTlQFb8qjPeX3gX3U/DbDV3imUZXnNHFGe5b08MGM6uZsNIOtac4xOEwZDQAVGRJ3lRHiX5XjyqP2XZUloxZSzKj9ah0/wAU3o3B9kcO0FOPhDpbTmICQlsHcnKPbJPG3Kh4XGpZSt90jO57KbCEiyRG4WA8qB2k28gI7loyJlRt4lcuI56VlXFqWZWZO4bh+po2yymOKVtfazmJV4iQi8J0EdNw+J+FF7MbfOCezRmaXZ1Gsjcofxp3eY32rRNDdROtU5suXbnO02FKEHvUBLiUqbCSkuL5ZAc028t9YP8AaHtdt5KEZk50LBSgQVJSUwrvFAkA6HKOGprDONpAP0oE8KWkpaVTSlObd4QLc+ZprLdvnz5dKlgfcUNpOEJTIGgjyqK8irRxH0qGtuhNxQAmlCLff3vo4Rf750iU+HzNJn6oosfOjsZTY2O48eR/WmYhFz6+t6DVI/Wp+UDUGiNugaNjziozL4NleR4deIowEGJApNd7m4lJdUdAkfGnIChcFIPK3qKCnLvWKKlKN7gpqktTsNjzInwq3EH5GpiWmVzmBQo+8jSeaND5RVVLX5pp4XF0qzDgdR0NCv8AqevYSiO8Q60sCJuoH+pMQnqSOtDwWFfQsKanOnxeEwRGusW6UPD4y8glKqOjFKBkEgi4IsR0IpzLSb4scnUexm00Ywd3iUlt4eySCEuHSBPvdLH4Vo2+zXiJLljujdXD2caUqzwkneFJBB/TdcQedbnBftNdlKXGkqEAEhRSvhMqOVXnHWn7OfP8azmcuhL7NIIjPUcdkUJHhVB41Qq7dI/MOOo+VMPbxP5viP0q9Vzan05/26YCMW+mZyrSJ/oTWQWL1pO1OL7191wH21FXrpVJ+7E3JilWmPTre0f8ljv+4flVdsn/AON/1o//AFr1erP4dP8AsQdnf47/AFf/ANiqr9g/4J/mPzr1eqXo49iu/wCdV/2h9KD2l9tj+U/7qWvUvhc6pvaP2GPvcKtMV/k1/wAn1r1eoh/51z/Ef4qv5R8qcn9a9Xqbjz/anoprmler1OM70gv0JvXyr1eorP5T8P7I6fSjCvV6k6J0Q+zUVz6CvV6hNBTrQU6Hqr5V6vUMzcRqOg+VRTXq9VRln+zwqS77Ken1NLXqVPHqgCnJpK9QUFTrU1ikr1OLxPX7Q6n5irM/p8q9XqVaeP5eV9KYrUefyFLXqTT6TEe16173q9Xq2jzs/wBqDjNU/wAw+VBc1NLXqfyX0//Z"
    },
    {
        question: "Who's the strongest Avenger?",
        choices: ["Vision","Thor","Hulk","Captain America"],
        Answer: "Hulk",
        img: "https://akns-images.eonline.com/eol_images/Entire_Site/201476/rs_736x981-140806142018-The_Hulk.jpg"
    },
    {
        question: "What special bond does Doctor Strange and Iron Man?",
        choices: ["Awesome Facial Hair Bros","Both doctors","Born in the same state","Both were Sherlock Holmes"],
        Answer: "Awesome Facial Hair Bros",
        img: "https://pics.me.me/awesome-facial-hair-bros-25647490.png"
    }
]


$(document).ready(function(){
    $("#start").on("click", playGame);
    board.on("click", "button", evaluateChoice)
    function playGame(){
        round = 0;
        correct = 0;
        incorrect = 0;
        time = 20;
        playRound();
    }
    function playRound(){
        clearBoard();
        displayQuestion(questions[round].question);
        displayChoices(questions[round].choices);
        time= 20;
        intervalId = setInterval(function(){
            if(time > 0){
            time--;
            $("#timer").text("You have " + time + " seconds left!")
            }
            else{
                clearBoard();
                displayCorrect();
                incorrect++;
                roundCounter();
                setTimeout(playRound, 4000);
            }
        }, 1000)

        
    }
    function displayQuestion(question){
        var questionBox = $("<div>");
        var questionStem = $("<p>").text(question);
        questionBox.append(questionStem);
        board.append(questionBox);
    }
    
    function displayChoices(choices){
        var choiceBox = $("<div>");
        for(var i = 0; i < 4; i++){
            var choiceButton = $("<button>").text(choices[i]).attr("choice", choices[i]);
            // maybe add a class to the buttons for styling
            choiceBox.append(choiceButton);
        }
        board.append(choiceBox);
    }
    function evaluateChoice(){
        var userAnswer = $(this).attr("choice");
        if(userAnswer === questions[round].Answer){
            clearBoard();
            displayCorrect();
            correct++;
            roundCounter();
            setTimeout(playRound, 4000);
        }
        else if(userAnswer !== questions[round].Answer){
            clearBoard();
            displayCorrect();
            incorrect++;
            roundCounter();
            setTimeout(playRound, 4000);
            
        }
    }
    
    
    function displayCorrect(){
        board.append($("<img>").attr("src", "https://cdn.shopify.com/s/files/1/0489/2545/products/ohhappydayconfetti_4468_61fb3a23-021a-4cc4-b2a4-514d71b1209a_1024x1024.jpg?v=1498626480"))
    }
    function roundCounter(){
        round++;
        if(round === 5){
            end();
        };
    }
    
    function clearBoard(){
        board.empty();
        clearInterval(intervalId);
    };
    
    function end(){
        clearBoard();
        board.text("You answered " + correct + " questions correctly & " + incorrect +" incorrectly.")
        var restart = $("<button>");
        board.append(restart)
        restart.html("Restart")
        restart.on("click", playGame)
    }
    
    
});
    