const solutionLiNodeList = document.querySelectorAll('.left-ul li');
const wrap = document.querySelector('.wrap-info');
const photoRight = document.querySelector('.solutions-content .right');
const topNumber = document.querySelector('.top-number');
const solutionLiArr = Array.from(solutionLiNodeList);
const headline = document.querySelector('.headline');

let tab = '';
let arrowsSolution = '';
let arrowsSolutionArr = '';
let index = 0;
let indexTab = 0;

const menuMobile = () => {
	const menu = document.querySelector('#menu .nav-2');
	menu.classList.toggle('disabled');
};

const content = [
	`<div class='info'>
		<div class='content'>
			<div class='icon'>
				<img src='images/solutions-icons/icon/0.svg' alt='' />
			</div>
			<ul>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Order bump direto no checkout</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Upsell com 1 click</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Integração com pixel de rastreamento para Ads</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Checkout personalizável</div>
				</li>
			</ul>
		</div>
		<div class='aws'>
			<img src='images/solutions-icons/Amazon_Web_Services_Logo 1.svg' alt='' />
			<div class='text'>
				<span>AWS:</span> Servidores eficientes que suportam altas demandas de
				tráfego, preparados para processar dados com velocidade e segurança.
			</div>
		</div>
	</div>`,
	`<div class='info'>
		<div class='content'>
			<div class='icon'>
				<img src='images/solutions-icons/icon/1.svg' alt='' />
			</div>
			<ul>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>
						Crie diferentes ofertas para o mesmo produto (order bumps e upsell)
					</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>
						Organização das aulas no estilo drag & drop (arrasta e solta)
					</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Módulos multi-turmas para um mesmo curso</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>
						Suba com facilidade conteúdos em vídeo, links, textos e PDF's
					</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>
						Programe a liberação automatizada de módulos a partir da data da
						compra
					</div>
				</li>
			</ul>
		</div>
	</div>`,
	`<div class='info'>
		<div class='content'>
			<div class='icon'>
				<img src='images/solutions-icons/icon/2.svg' alt='' />
			</div>
			<ul>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>
						Grátis (independente da quantidade de usuários)
					</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Jornada simplificada de módulos e vídeos</div>
				</li>
				<li>
					<img src='images/arrow-right.svg' alt='' />
					<div class='text'>Acompanhamento de progresso dos alunos</div>
				</li>
			</ul>
		</div>
	</div>`,
	`<div class="info">
	<div class="content">
		<div class="icon">
			<img src="images/solutions-icons/icon/3.svg" alt="" />
		</div>
		<div class="tab">
			<ul>
				<img
					src="images/solutions-icons/integrations/0.svg"
					alt=""
					class="solutions-integrations"
				/>
				<li>
					<div class="text">
						Sistema de emissão automática de notas fiscais
						eletrônicas.
					</div>
				</li>
				<img
					src="images/solutions-icons/integrations/1.svg"
					alt=""
					class="solutions-integrations"
				/>
				<li>
					<div class="text">
						Ferramenta de recuperação de vendas por Whatsapp
					</div>
				</li>
				<img
					src="images/solutions-icons/integrations/2.svg"
					alt=""
					class="solutions-integrations"
				/>
				<li>
					<div class="text">
						Automação de e-mails e ações de marketing
					</div>
				</li>
			</ul>
		</div>
		<div class="arrowsSolution">
			<div class="arrowSolution activeArrow">
				<svg
					width="14"
					height="24"
					viewBox="0 0 14 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.9656 0.459178C12.3531 -0.153322 11.3656 -0.153322 10.7531 0.459178L0.365565 10.8467C-0.121935 11.3342 -0.121935 12.1217 0.365565 12.6092L10.7531 22.9967C11.3656 23.6092 12.3531 23.6092 12.9656 22.9967C13.5781 22.3842 13.5781 21.3967 12.9656 20.7842L3.91556 11.7217L12.9781 2.65918C13.5781 2.05918 13.5781 1.05918 12.9656 0.459178V0.459178Z"
						fill="#AFAFAF"
					/>
				</svg>
			</div>
			<div class="arrowSolution">
				<svg
					width="14"
					height="24"
					viewBox="0 0 14 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.9656 0.459178C12.3531 -0.153322 11.3656 -0.153322 10.7531 0.459178L0.365565 10.8467C-0.121935 11.3342 -0.121935 12.1217 0.365565 12.6092L10.7531 22.9967C11.3656 23.6092 12.3531 23.6092 12.9656 22.9967C13.5781 22.3842 13.5781 21.3967 12.9656 20.7842L3.91556 11.7217L12.9781 2.65918C13.5781 2.05918 13.5781 1.05918 12.9656 0.459178V0.459178Z"
						fill="#AFAFAF"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>`,
];
const photo = [
	'url(./images/solutions-icons/photo/0.jpg)',
	'url(./images/solutions-icons/photo/1.jpg)',
	'url(./images/solutions-icons/photo/2.jpg)',
	'url(./images/solutions-icons/photo/3.jpg)',
];
const contentTabArrow = [
	`<ul>
									<img
										src="images/solutions-icons/integrations/0.svg"
										alt=""
										class="solutions-integrations"
									/>
									<li>
										<div class="text">
											Sistema de emissão automática de notas fiscais
											eletrônicas.
										</div>
									</li>
									<img
										src="images/solutions-icons/integrations/1.svg"
										alt=""
										class="solutions-integrations"
									/>
									<li>
										<div class="text">
											Ferramenta de recuperação de vendas por Whatsapp
										</div>
									</li>
									<img
										src="images/solutions-icons/integrations/2.svg"
										alt=""
										class="solutions-integrations"
									/>
									<li>
										<div class="text">
											Automação de e-mails e ações de marketing
										</div>
									</li>
	</ul>`,
	`<ul>
								<img
									src="images/solutions-icons/integrations/0.svg"
									alt=""
									class="solutions-integrations"
								/>
								<li>
									<div class="text">
										Outra integração.
									</div>
								</li>
	</ul>`,
];

const putContent = (index) => {
	topNumber.classList.remove('animation-number');
	const conteudo = content[index];
	wrap.innerHTML = conteudo;
	photoRight.style.backgroundImage = photo[index];
	photoRight.animate([{ opacity: 0.7 }, { opacity: 1 }], {
		duration: 1000,
		iterations: 1,
		easing: 'ease',
	});
	topNumber.textContent = `0${++index}`;
	topNumber.animate(
		[
			{
				visibility: 'hidden',
				top: '50px',
			},
			{
				visibility: 'visible',
				top: 0,
			},
		],
		{
			duration: 600,
			iterations: 1,
			easing: 'ease',
		},
	);
	if (index === 4) {
		tab = document.querySelector('.tab');
		arrowsSolution = document.querySelectorAll('.arrowSolution');
		arrowsSolutionArr = Array.from(arrowsSolution);
		handleArrow();
	}
};

const changeActiveLi = (e) => {
	index = solutionLiArr.indexOf(e.currentTarget);
	const currentLi = e.currentTarget;
	solutionLiArr.forEach((element) => {
		element.classList.remove('activeLi');
	}),
		currentLi.classList.add('activeLi');
	putContent(index);
};

solutionLiArr.forEach((element) => {
	element.addEventListener('click', changeActiveLi);
});

const putContentTabArrow = (index) => {
	tab.innerHTML = contentTabArrow[index];
};

const integrationsTab = (e) => {
	indexTab = arrowsSolutionArr.indexOf(e.currentTarget);
	const currentArrow = e.currentTarget;
	arrowsSolutionArr.forEach((element) => {
		element.classList.remove('activeArrow');
	}),
		currentArrow.classList.add('activeArrow');
	putContentTabArrow(indexTab);
};

const handleArrow = () => {
	arrowsSolutionArr.forEach((element) => {
		element.addEventListener('click', integrationsTab);
	});
};

let i = 0;
const text = ['fácil,', ' prático', ' e  intuitivo.'];
const typing = () => {
	if (i < text.length) {
		headline.innerHTML += text[i];
		i++;
		setTimeout(typing, 1000);
	}
};
typing();
