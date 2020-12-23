import React from 'react';
import Layout from '../layouts/index';

export default function AboutPage() {
	return (
		<Layout>
			<article className="entry">
				<div className="container">
					<div className="entry-inner">
						<div className="entry-content">
							<div className="container-sm">
								<header className="entry-header">
									<h1 className="entry-title">About</h1>
								</header>

								<div className="entry-body">
									<p>
										We are a team of engineers, designers, and entrepreneurs
										with one thing in common: a genuine love for AI and UI
										design!
									</p>
									<p>
										Our vision is to improve the designer/developer workflow
										that too often results in more frustration than innovation.
									</p>
									<hr />
									<p align="center">
										Less Manual Work 💻 = More Iteration Cycles 🚀 = Fostered
										Innovation 💡
									</p>
								</div>
							</div>
						</div>
						<div className="entry-media">
							<img src="https://placehold.it/420x640" alt="" />
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}
