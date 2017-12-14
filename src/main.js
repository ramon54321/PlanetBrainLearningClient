import React from "react"
import ReactDom from "react-dom"

class Hello extends React.Component {
	render() {
		return <h3>Hello, component world!</h3>
	}
}

const page =
<div className="root">
	<div className="container-nav">
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light font-heading bold">
			  	<a className="navbar-brand" href="#">
					<img src="../public/logo.png" width="128" alt="" />
				</a>
			  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>
			  	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				    <ul className="nav navbar-nav ml-auto">
				      	<li><a className="nav-item nav-link active" href="#">Intro</a></li>
						<li><a className="nav-item nav-link" href="#">Guide</a></li>
				      	<li><a className="nav-item nav-link" href="#">Sign In</a></li>
				  	</ul>
			  	</div>
			</nav>
		</div>
	</div>
	<div className="container-cover">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 ">
					<div className="cover-title font-heading willfade" id="cover-title">
						Learn...
					</div>
					<div className="cover-subtitle font-heading willfade" id="cover-subtitle">
						...the easy way!
					</div>
				</div>
				<div className="col-lg-6">
					<div className="root willfade" id="cover-signup">
						<div className="row cover-margin-top font-heading">
							<h5 className="white">New here?</h5>
						</div>
						<div className="row margin-top-1">
							<input className="form-control cover" type="email" placeholder="Email Address" />
						</div>
						<div className="row margin-top-1">
							<input className="form-control cover" type="password" placeholder="Password" />
						</div>
						<div className="row margin-top-1">
							<button type="button" className="btn btn-white cover btn-lg btn-block">Create your Account</button>
						</div>
						<div className="row">
							<small className="white margin-left-1 margin-top-05">By creating an account you agree to our Terms and Conditions</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="root">
		<div className="container">
			<div className="row margin-top-4">
				<div className="col-lg-7">
					<div className="grid-block">
						<h2>Building Your Memory</h2>
						<br />
						<p>Develop your memory extensively by <b>making connections</b> with words you learn.</p>
						<p>Using <b>Planet Brain's</b> learning system, you will be able memorize words <b>progressively</b>, in order of importance, maximizing the effectiveness of your learning.</p>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="grid-block hide-on-mobile">
						<img src="../public/brain.png" width="100%" alt="" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-5">
					<div className="grid-block hide-on-mobile">
						<img src="../public/database.png" width="100%" alt="" />
					</div>
				</div>
				<div className="col-lg-7">
					<div className="grid-block">
						<h2 className="margin-top-4 break-margin-on-mobile">Personal Database</h2>
						<br />
						<p>Enjoy a <b>personalized</b> experience, where you are tested on <b>vocabulary</b> specific to your weaknesses.</p>
						<p>All your learning data is stored in your <b>secure</b> account.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

ReactDom.render(
	page,
	document.getElementById("root")
)

$(function() {
	setTimeout(function(){
		$('#cover-title').fadeIn(1000)
	}, 500)

	setTimeout(function(){
		$('#cover-subtitle').fadeIn(1000)
	}, 1000)

	setTimeout(function(){
		$('#cover-signup').fadeIn(1000)
	}, 1500)
})

/*
<div className="container-fluid">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  	<a className="navbar-brand" href="#">Navbar</a>
	  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    	<span className="navbar-toggler-icon"></span>
	  	</button>
	  	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div className="navbar-nav">
		      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
		      <a className="nav-item nav-link" href="#">Features</a>
		      <a className="nav-item nav-link" href="#">Pricing</a>
		      <a className="nav-item nav-link disabled" href="#">Disabled</a>
		    </div>
	  	</div>
	</nav>
	<div className="container title-block">
		<div className="row">
			<div className="col-sm">
				<div className="language-titleword">
					Kauppa
				</div>
			</div>
		</div>
		<div className="row row-top-buffer">
			<div className="col-4">
				<div className="language-card">
					<div className="language-card-slot">
						bathroom
					</div>
					<div className="language-card-slot">
						apartment
					</div>
					<div className="language-card-slot">
						shop
					</div>
					<div className="language-card-slot">
						to run
					</div>
					<div className="language-card-slot">
						mall
					</div>
				</div>
			</div>
			<div className="col-8 language-sentence-container">
				<div className="language-card sentence">
					<div className="language-card-slot">
						<span className="badge badge-pill badge-primary language-badge level1">Level 1</span>
						Mikko menee kauppaan illalla.
					</div>
				</div>
				<div className="language-card sentence">
					<div className="language-card-slot">
						<span className="badge badge-pill badge-primary language-badge level1">Level 1</span>
						Kaupassa on ruokaa.
					</div>
				</div>
				<div className="language-card sentence">
					<div className="language-card-slot">
						<span className="badge badge-pill badge-primary language-badge level2">Level 2</span>
						Minä tulen kaupasta työn jälkeen.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
*/
