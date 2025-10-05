import { PolyhedronGeometry } from "three";

/**
 * A geometry class for representing a pentagonal trapezohedron.
 *
 * ```js
 * const geometry = newPentagonalTrapezohedronGeometry();
 * const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 * const pentagonalTrapezohedron = new THREE.Mesh( geometry, material );
 * scene.add( pentagonalTrapezohedron );
 * ```
 *
 * @augments PolyhedronGeometry 
 */
class PentagonalTrapezohedronGeometry extends PolyhedronGeometry {

	/**
	 * Constructs a new pentagonal trapezohedron geometry.
	 *
	 * @param {number} [radius=1] - Radius of the pentagonal trapezohedron.
	 * @param {number} [detail=0] - Setting this to a value greater than `0` adds vertices making it no longer a pentagonal trapezohedron.
	 */
	constructor( radius = 1, detail = 0 ) {
		// The math for this shape comes from user Jean Marie on Math StackExchange
		// https://math.stackexchange.com/questions/2464000/pentagonal-trapezohedron-with-face-perpendicular-to-side
		const c = Math.cos(Math.PI / 5);
		const b = (1 / Math.sqrt(c) + Math.sqrt(c)) / 2;
		const a = (1 / Math.sqrt(c) - Math.sqrt(c)) / 2;

		const vertices = [
			// S+
			0, b, 0,

			// A_k, B_k interleaved
			Math.cos(0 * Math.PI / 5), a, Math.sin(0 * Math.PI / 5),
			Math.cos(1 * Math.PI / 5), -a, Math.sin(1 * Math.PI / 5),
			Math.cos(2 * Math.PI / 5), a, Math.sin(2 * Math.PI / 5),
			Math.cos(3 * Math.PI / 5), -a, Math.sin(3 * Math.PI / 5),
			Math.cos(4 * Math.PI / 5), a, Math.sin(4 * Math.PI / 5),
			Math.cos(5 * Math.PI / 5), -a, Math.sin(5 * Math.PI / 5),
			Math.cos(6 * Math.PI / 5), a, Math.sin(6 * Math.PI / 5),
			Math.cos(7 * Math.PI / 5), -a, Math.sin(7 * Math.PI / 5),
			Math.cos(8 * Math.PI / 5), a, Math.sin(8 * Math.PI / 5),
			Math.cos(9 * Math.PI / 5), -a, Math.sin(9 * Math.PI / 5),

			// S-
			 0, -b, 0,
		];

		const indices = [
			0, 2,  1,   0, 3, 2,
			0, 4,  3,   0, 5, 4,
			0, 6,  5,   0, 7, 6,
			0, 8,  7,   0, 9, 8,
			0, 10, 9,   0, 1, 10,
			11, 1, 2,   11, 2, 3,
			11, 3, 4,   11, 4, 5,
			11, 5, 6,   11, 6, 7,
			11, 7, 8,   11, 8, 9,
			11, 9, 10,  11, 10, 1,
		];

		super( vertices, indices, radius, detail );

		this.type = 'PentagonalTrapezohedronGeometry';

		/**
		 * Holds the constructor parameters that have been
		 * used to generate the geometry. Any modification
		 * after instantiation does not change the geometry.
		 *
		 * @type {Object}
		 */
		this.parameters = {
			radius: radius,
			detail: detail
		};

	}

	/**
	 * Factory method for creating an instance of this class from the given
	 * JSON object.
	 *
	 * @param {Object} data - A JSON object representing the serialized geometry.
	 * @return {PentagonalTrapezohedronGeometry} A new instance.
	 */
	static fromJSON( data ) {

		return new PentagonalTrapezohedronGeometry( data.radius, data.detail );

	}

}


export { PentagonalTrapezohedronGeometry };